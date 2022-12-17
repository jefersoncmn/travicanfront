import { ILand } from "./landModel";

export interface IUser {
    name: string,
    username: string,
    email: string,
    id: string,
    land: ILand
}

export class User{
    name!: string;
    username!: string;
    email!: string;
    id: string;

    constructor({name, username, email, id}:IUser){
        this.email = email;
        this.username = username;
        this.name = name;
        this.id = id;
    }

}