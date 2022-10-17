import { MandatoryTypes } from "../../Enums/MandatoryTypes";

export interface MandatoryObj {
    mandatoryType: MandatoryTypes,
    mandatoryArg?: string | number | RegExp | Function
}