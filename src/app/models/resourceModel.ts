import { IResourceType } from "./resourceTypeModel";

export interface IResource {
    id: string,
    amount: string,
    resourceType: IResourceType
}