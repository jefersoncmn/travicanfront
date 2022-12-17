import { IResource } from "./resourceModel";

export interface ISoldier{
    id: string;
    name: string;
    attack: number;
    defense: number;
    timeToSpawn?: number;
    costToSpawn?: IResource;
    budget?: IResource;
}