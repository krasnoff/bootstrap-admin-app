import { Indicator } from "./IndicatorEnum";

export default interface MessagesComponentsProps {
    createDate: Date,
    title: string,
    alreadeyRead: boolean,
    iconBackgroundColor: string,
    id: string,
    picUrl: string,
    indicator: Indicator
}