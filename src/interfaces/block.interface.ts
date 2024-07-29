import { ERarity } from '../enums/rarity.enum';
import { EClass } from '../enums/class';

export interface IBlock {
    id: number;
    name: string;
    rarity: ERarity;
    class: EClass;
    image: string;
    value: number;
    width: number;
    height: number;
    space: number;
}