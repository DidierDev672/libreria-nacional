import { Detail } from "./detail";

export interface Book {
  bookId: string;
  title: string;
  imgUrl: string;
  pages: string;
  size: string;
  year: string;
  publisher: string;
  language: string;
  type: string;
  authors: string;
  category: string;
  detail: Detail;
}
