import { useState } from "react";
import { MandatoryTypes } from "../Enums/MandatoryTypes";
import { FormFieldInteface } from "../Types/General/Formfield";
import { MandatoryObj } from "../Types/General/ManDatoryObj";
import { SimpleFormInteface } from "../Types/General/SimpleFormInterface";

export function useFormUtilities() {
    const [notValidresult, setNotValidresult] = useState<boolean>();

    const convertObjectToArray = (obj: any) => {
        Object.keys(obj).forEach(key => {
            console.log(key, obj[key]);
        })
    }

    const isValidIsraeliID = (id: string) => {
        id = String(id).trim();
        if (id.length > 9 || id.length < 5 || isNaN(id as unknown as number)) return false;
    
        // Pad string with zeros up to 9 digits
          id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    
          return Array
                .from(id, Number)
                  .reduce((counter, digit, i) => {
                    const step = digit * ((i % 2) + 1);
                            return counter + (step > 9 ? step - 9 : step);
                        }) % 10 === 0;
    }

    const validateElement = (mandatoryObj: MandatoryObj, value: string | number | undefined): boolean => {
        let isNotValid = false;
        if (mandatoryObj.mandatoryType === MandatoryTypes.required) {
            if (value === undefined || value === null || value === '') {
                isNotValid = true;
            }
        } else if (mandatoryObj.mandatoryType === MandatoryTypes.Regex) {
            if (mandatoryObj.mandatoryArg && mandatoryObj.mandatoryArg instanceof RegExp) {
                if (!mandatoryObj.mandatoryArg.test(value as string)) {
                    isNotValid = true;
                }
            } else {
                isNotValid = true;
            }
        } else if (mandatoryObj.mandatoryType === MandatoryTypes.rangeMaximum) {
            if (value && value !== '' && !isNaN(value as number) && !isNaN(mandatoryObj.mandatoryArg as number)) {
                if ((value as number) > (mandatoryObj.mandatoryArg as number)) {
                    isNotValid = true;
                }
            } else {
                isNotValid = true;
            }
        } else if (mandatoryObj.mandatoryType === MandatoryTypes.rangeMinimum) {
            if (value && value !== '' && !isNaN(value as number) && !isNaN(mandatoryObj.mandatoryArg as number)) {
                if ((value as number) < (mandatoryObj.mandatoryArg as number)) {
                    isNotValid = true;
                }
            } else {
                isNotValid = true;
            }
        } else if (mandatoryObj.mandatoryType === MandatoryTypes.userDefined) {
            if (mandatoryObj.mandatoryArg instanceof Function) {
                isNotValid = (mandatoryObj.mandatoryArg as Function)(value);
            }
        }
        setNotValidresult(isNotValid);
        return isNotValid;
    }

    const setFormState = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, inputs: SimpleFormInteface) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const formName = event.target.name;
            if ((inputs as any)[formName]) {
                (inputs as any)[formName].checked = (event.target as HTMLInputElement).checked;
            }
        } else {
            const formName = event.target.name;
            if ((inputs as any)[formName]) {
                (inputs as any)[formName].value = event.target.value;

                // TODO check validation
                const element: FormFieldInteface = (inputs as any)[formName];
                // console.log('element', element);

                element.isNotValid = false;
                element.mandatoryObjArr?.every(el => {
                    element.isNotValid = validateElement(el, element.value);
                    return !element.isNotValid;
                });
            }
        }

        return inputs;
    }

    return { setFormState, validateElement, notValidresult, isValidIsraeliID }
}