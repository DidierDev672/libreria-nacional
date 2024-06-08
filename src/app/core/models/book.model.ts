export interface Book {
  bookId: string;
  title: string;
  imgUrl: string;
  pages: string | number;
  size: string | number;
  year: string | number;
  publisher: string | number;
  language: string;
  type: string;
  authors: string;
  price: number | string;
}
