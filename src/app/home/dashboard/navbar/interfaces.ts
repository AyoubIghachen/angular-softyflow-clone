export interface User {
    _id: string;
    email: string;
    role: string;
    age: number;
    firstName: string;
    lastName: string;
}

export interface JwtPayload {
    _id: string;
    email: string;
    role: string;
    age: number;
    firstName: string;
    lastName: string;
}