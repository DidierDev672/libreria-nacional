import { Author } from './Author';
import { DescriptionModel } from './DescriptionModel';
import { DetailModel } from './DetailModel';
import { Editorial } from './Editorial';

export class Book {
  private uuid: string;
  private title: string;
  private authors: Author[];
  private editorial: Editorial;
  private detailModel: DetailModel;
  private DescriptionModel: DescriptionModel;
  private photo: string;

  constructor(
    uuid: string,
    title: string,
    authors: Author[],
    editorial: Editorial,
    detailModel: DetailModel,
    descriptionModel: DescriptionModel,
    photo: string,
  ) {
    this.uuid = uuid;
    this.title = title;
    this.authors = authors;
    this.editorial = editorial;
    this.detailModel = detailModel;
    this.DescriptionModel = descriptionModel;
    this.photo = photo;
  }


  getUuid(): string {
    return this.uuid;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  getEditorial(): Editorial {
    return this.editorial;
  }

  getDetailModel(): DetailModel {
    return this.detailModel;
  }

  getDescriptionModel(): DescriptionModel {
    return this.DescriptionModel;
  }

  getPhoto(): string {
    return this.photo;
  }

  setUuid(uuid: string): void {
    this.uuid = uuid;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setAuthors(authors: Author[]): void {
    this.authors = authors;
  }

  setEditorial(editorial: Editorial): void {
    this.editorial = editorial;
  }

  setDetailModel(detailModel: DetailModel): void {
    this.detailModel = detailModel;
  }


  setDescriptionModel(descriptionModel: DescriptionModel): void {
    this.DescriptionModel = descriptionModel;
  }

  setPhoto(photo: string): void {
    this.photo = photo;
  }
}
