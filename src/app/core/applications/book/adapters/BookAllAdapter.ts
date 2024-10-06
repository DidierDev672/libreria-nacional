import { Book } from "../../../domains/models/Book";
import { GenericGetAllRepository } from "../../../domains/repository/GenericGetAllRepository";
import { BookAllPort } from "../ports/BookAllPort";

export class BookAllAdapter implements BookAllPort {
    private genericAll: GenericGetAllRepository<Book>;

    private constructor(genericAll: GenericGetAllRepository<Book>){
        this.genericAll = genericAll;
    }

    public static init (genericAll: GenericGetAllRepository<Book>){
        return new BookAllAdapter(genericAll);
    }

    getAllBooks(): Promise<Book[]> {
        return new Promise<Book[]>((resolve, reject) => {
            this.genericAll.getAll().then((books) => {
                if(books){
                    resolve(books);
                } else {
                    reject('Error al obtener libros');
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

}