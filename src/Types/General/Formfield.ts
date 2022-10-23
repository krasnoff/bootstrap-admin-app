import { MandatoryObj } from "./ManDatoryObj";

export interface FormFieldInteface {
    fieldName: string,
    mandatoryObjArr?: Array<MandatoryObj>
}