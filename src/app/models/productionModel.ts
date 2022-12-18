import { IResource } from "./resourceModel";

export interface IProduction{
    id: string;
    name: string;
    level: number;
    returnedResource: IResource;
    timeToHarvest: number;
    timeToUpgrade: number;
}