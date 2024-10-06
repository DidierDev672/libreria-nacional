import { Author } from "./Author";
import { Genre } from "./Genre";

export class DetailModel {
    private title: string;
    private authors: Author[];
    private genres: Genre[];
    private ISBN: string;
    private language: string;
    private pages: number;
    private year: number;


    constructor(title: string, authors: Author[], genres: Genre[], ISBN: string, language: string, pages: number, year: number) {
        this.title = title;
        this.authors = authors;
        this.genres = genres;
        this.ISBN = ISBN;
        this.language = language;
        this.pages = pages;
        this.year = year;
    }


    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthors(): Author[] {
        return this.authors;
    }

    setAuthors(authors: Author[]): void {
        this.authors = authors;
    }

    getGenres(): Genre[] {
        return this.genres;
    }

    setGenres(genres: Genre[]): void {
        this.genres = genres;
    }

    getISBN(): string {
        return this.ISBN;
    }

    setISBN(ISBN: string): void {
        this.ISBN = ISBN;
    }

    getLanguage(): string {
        return this.language;
    }

    setLanguage(language: string): void {
        this.language = language;
    }

    getPages(): number {
        return this.pages;
    }

    setPages(pages: number): void {
        this.pages = pages;
    }

    getYear(): number {
        return this.year;
    }

    setYear(year: number): void {
        this.year = year;
    }
}