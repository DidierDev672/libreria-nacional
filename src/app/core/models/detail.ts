export interface Detail {
  bookId: string;
  description: string | undefined;
  numberPages: number | string | undefined;
  numberChapters: number | string | undefined;
  dimensiones: Array<number | string> | undefined;
  peso: number | string |undefined;
}
