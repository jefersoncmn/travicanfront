import { IArmy } from "./armyModel";
import { IProduction } from "./productionModel";
import { IResource } from "./resourceModel";
import { IWar } from "./warModel";
import { IWorld } from "./worldModel";

export interface ILand{
    id: string;
    name: string;
    world: IWorld;
    resources: IResource[];
    army: IArmy;
    ProductionLand: IProduction[];
    landAttack: IWar;
    landDefense: IWar;
}