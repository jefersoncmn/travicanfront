import { ILand } from "./landModel";

export interface IWar{
    landAttack: ILand;
    landDefense: ILand;
    timeToStart: number;
}