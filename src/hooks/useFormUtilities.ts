import { useState } from "react";
import { MandatoryTypes } from "../Enums/MandatoryTypes";
import { MandatoryObj } from "../Types/General/ManDatoryObj";
import { SimpleFormInteface } from "../Types/General/SimpleFormInterface";

export function useFormUtilities() {
    const [notValidresult, setNotValidresult] = useState<boolean>();

    const isValidIsraeliID = (id: string) => {
        let strId = String(id).trim();
        if (strId.length > 9) {
            return false;
        }
        if (strId.length < 9) {
            while (strId.length < 9) strId = "0" + strId;
        }
        let counter = 0, rawVal, actualVal;
        for (let i = 0; i < strId.length; i++) {
            rawVal = Number(strId[i]) * ((i % 2) + 1);
            actualVal = rawVal > 9 ? (rawVal - 9) : rawVal;
            counter += actualVal;
        }
        return !(counter % 10 === 0);
    }

    const validateElement = (mandatoryObj: MandatoryObj, value: string | number | boolean | undefined): boolean => {
        let isNotValid = false;
        if (mandatoryObj.mandatoryType === MandatoryTypes.required) {
            if (value === undefined || value === null || value === '' || value === false) {
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
            }
        }

        return inputs;
    }

    return { setFormState, validateElement, notValidresult, isValidIsraeliID }
}