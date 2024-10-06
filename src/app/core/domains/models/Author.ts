import { Genre } from "./Genre";

export class Author {
    private uuid: string;
    private name: string;
    private genre: Genre[];
    private description: string[];
    private photo: string;

    constructor( uuid: string, name: string, genre: Genre[], description: string[], photo: string ){
        this.uuid = uuid;
        this.name = name;
        this.genre = genre;
        this.description = description;
        this.photo = photo;
    }

    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    getGenre(): Genre[] {
        return this.genre;
    }

    getDescription(): string[] {
        return this.description;
    }

    getPhoto(): string {
        return this.photo;
    }

    setName(name: string): void {
        this.name = name;
    }

    setGenre(genre: Genre[]): void {
        this.genre = genre;
    }

    setDescription(description: string[]): void {
        this.description = description;
    }

    setPhoto(photo: string): void {
        this.photo = photo;
    }

}