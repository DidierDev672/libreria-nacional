import { Author } from "./Author";
import { Book } from "./Book";
import { Know } from "./Know";

export class Editorial {
    private uuid: string;
    private name: string;
    private authors: Author[];
    private books: Book[];
    private know: Know;
    private photo: string;

    constructor(uuid: string, name: string, authors: Author[], books: Book[], know: Know, photo: string) {
        this.uuid = uuid;
        this.name = name;
        this.authors = authors;
        this.books = books;
        this.know = know;
        this.photo = photo;
    }

    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    getAuthors(): Author[] {
        return this.authors;
    }

    getBooks(): Book[] {
        return this.books;
    }

    getKnow(): Know {
        return this.know;
    }

    getPhoto(): string {
        return this.photo;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAuthors(authors: Author[]): void {
        this.authors = authors;
    }

    setBooks(books: Book[]): void {
        this.books = books;
    }

    setKnow(know: Know): void {
        this.know = know;
    }

    setPhoto(photo: string): void {
        this.photo = photo;
    }
}