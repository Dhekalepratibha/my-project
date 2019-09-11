import { CardInfo } from './card.domain';

export interface cardEvent{
    tmp : number
    parent : string
    card : CardInfo
}