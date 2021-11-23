import { SingleItem } from "./SingleItem";

export default interface SubMenuItem {
    title: string;
    items: Array<SingleItem>
}