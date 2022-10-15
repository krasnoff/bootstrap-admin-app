import { MandatoryTypes } from "../../Enums/MandatoryTypes";

export interface FormFieldInteface {
    fieldName: string,
    value?: string | number,
    mandatoryTypes?: Array<MandatoryTypes>,
    mandatoryArgs?: string | number | RegExp,
    checked?: boolean
}