import { MandatoryObj } from "./ManDatoryObj";

export interface FormFieldInteface {
    fieldName: string,
    value?: string | number,
    mandatoryObjArr?: Array<MandatoryObj>
    checked?: boolean,
    isNotValid?: boolean
}