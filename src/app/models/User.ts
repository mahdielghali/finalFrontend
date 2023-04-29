import { Role } from "./Role";

export interface User {
    id: number;
    username: string;
    email:string;
    password: string;
    roles: Role[];
    transactions: {
    }[];
    
}