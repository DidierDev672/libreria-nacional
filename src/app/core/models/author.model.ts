import { Genre } from "../features/enum/genre";

export interface Author{
    id: string;
    name: string;
    genere: Genre;
    photo: string;
}
