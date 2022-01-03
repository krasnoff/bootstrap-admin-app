import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default interface AlertComponentsProps {
    createDate: Date,
    title: string,
    alreadeyRead: boolean,
    iconBackgroundColor: string,
    iconDefinition: IconDefinition,
    id: string
}