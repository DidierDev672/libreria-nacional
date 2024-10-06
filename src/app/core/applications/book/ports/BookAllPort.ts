import { Book } from "../../../domains/models/Book";

export interface BookAllPort {
    getAllBooks(): Promise<Book[]>;
}