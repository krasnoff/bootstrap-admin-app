import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface HeaderMenuItem {
    iconDefinition: IconDefinition,
    numberOfMessages: number,
    title: string,
    bottomText: string,
    bottomTextUrl: string,
    subMenuItems: Array<string>
}