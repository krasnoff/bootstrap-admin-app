import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MenuTypes } from "./MenuTypes";
import SubMenuItem from "./SubMenuItem";

export default interface MainMenuItem {
    title?: string;
    url?: string;
    subMenuItem?: SubMenuItem,
    iconDefinition: IconDefinition,
    menuType: MenuTypes
}