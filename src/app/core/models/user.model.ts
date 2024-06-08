export interface User {
    id: string;
    name: string;
}

export interface Admin extends User {
    adminLevel: number;
}