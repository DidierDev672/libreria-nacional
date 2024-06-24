import { Genre } from '../../features/enum/genre';
import { Author } from '../../models/author.model';

export const Authors: Author[] = [
  {
    id: '3fb3d539-b450-4e16-9d65-1b7c4010cee1',
    name: 'Issac Asimov',
    genere: Genre.CienciaFiccion,
    photo:
      'https://historia.nationalgeographic.com.es/medio/2019/12/26/asimov-es-recordado-sobre-todo-por-sus-obras-literarias-de-ciencia-ficcion-pero-tambien-por-su-faceta-como-divulgador_9afaf38b_550x721.jpg',
  },
  {
    id: '329d37fa-ea9a-4de1-9705-e860d47a9036',
    name: 'Arthur C. Clarke',
    genere: Genre.CienciaFiccion,
    photo: 'https://www.biografiasyvidas.com/biografia/c/fotos/clarke.jpg',
  },
  {
    id: '43479a46-b0a8-40b6-ae55-a0f5d4db33ca',
    name: 'H.G Wells',
    genere: Genre.CienciaFiccion,
    photo:
      'https://dl6pgk4f88hky.cloudfront.net/2021/06/2020_03_wells-scaled.jpg',
  },
  {
    id: '5e2dd1d7-9c34-45c4-aed0-6e37723f72c7',
    name: 'Jules Verne',
    genere: Genre.CienciaFiccion,
    photo:
      'https://i.pinimg.com/736x/ed/91/1e/ed911e2196c7415907dbdde98841bfc4.jpg',
  },
  {
    id: 'ccb54b79-dfc8-4a0f-9d3a-b5c56e883ad8',
    name: 'Philip K. Dick',
    genere: Genre.CienciaFiccion,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Philip_K_Dick_in_early_1960s_%28photo_by_Arthur_Knight%29_%28cropped%29.jpg',
  },
  {
    id: '133d9b42-dcb5-4946-83d1-e66a857ec4a6',
    name: 'William Shakespeare',
    genere: Genre.LiteraturaUniversal,
    photo:
      'https://hips.hearstapps.com/hmg-prod/images/william-shakespeare-news-photo-1711402843.jpg?crop=1.00xw:0.873xh;0,0.0445xh&resize=1200:*',
  },
  {
    id: '20c1f92d-92c0-4be0-ad64-4f089c4032ce',
    name: 'Jane Austen',
    genere: Genre.LiteraturaUniversal,
    photo:
      'https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg',
  },
  {
    id: '6e33269c-ce30-47a3-af48-173502f67a98',
    name: 'Leo Tolstoy',
    genere: Genre.LiteraturaUniversal,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ilya_Efimovich_Repin_%281844-1930%29_-_Portrait_of_Leo_Tolstoy_%281887%29.jpg',
  },
  {
    id: '03762fbf-5f70-4b92-b3a7-acea27612bb3',
    name: 'Homer',
    genere: Genre.LiteraturaUniversal,
    photo:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-188002319.jpg?resize=1200:*',
  },
  {
    id: '2c7d9306-0d91-4d67-a71b-b12f307089e5',
    name: 'Dante Alighieri',
    genere: Genre.LiteraturaUniversal,
    photo: 'https://www.biografiasyvidas.com/biografia/d/fotos/dante.jpg',
  },
  {
    id: 'e36955ed-866b-4940-8fd5-677c83455a9b',
    name: 'Plato',
    genere: Genre.Filosofia,
    photo:
      'https://cdn.britannica.com/88/149188-050-DC34842F/Plato-portrait-bust-original-Capitoline-Museums-Rome.jpg',
  },
  {
    id: '554feb44-3a75-475c-95be-ea78c7d5c5cb',
    name: 'Aristotle',
    genere: Genre.Filosofia,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg',
  },
  {
    id: '12a46941-985d-4268-b19a-b094d9cb30c3',
    name: 'Immanuel Kant',
    genere: Genre.Filosofia,
    photo: 'https://www.worldhistory.org/uploads/images/18361.png?v=1717521125',
  },
  {
    id: 'a0e1b336-a2a1-41cd-98ca-747fcbc93c2f',
    name: 'Friedrich Nietzsche',
    genere: Genre.Filosofia,
    photo:
      'https://escuelapce.com/wp-content/uploads/2022/12/Resumen-Nietzsche.webp',
  },
  {
    id: '70fbc62e-ed18-49c7-afee-3adb59be47da',
    name: 'Søren Kierkegaard',
    genere: Genre.Filosofia,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/d/d4/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg',
  },
  {
    id: 'c3a240e4-8a37-47f4-8ab1-fd3799c741e9',
    name: 'J.R.R. Tolkien',
    genere: Genre.Fantasia,
    photo: 'https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg',
  },
  {
    id: '63c89cea-5703-49d7-8b98-fbfd4c6de96a',
    name: 'George R.R. Martin',
    genere: Genre.Fantasia,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg',
  },
  {
    id: '10589096-8773-470e-931c-611f730fb713',
    name: 'C.S Lewis',
    genere: Genre.Fantasia,
    photo: 'https://cdn.britannica.com/24/82724-050-A1F9D0B9/CS-Lewis.jpg',
  },
  {
    id: 'b3156227-6f81-4b65-9eda-577b464f751e',
    name: 'J.K. Rowling',
    genere: Genre.Fantasia,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
  },
  {
    id: '8e300d47-e2c5-49f1-a89d-7e28fa135020',
    name: 'Brandon Sanderson',
    genere: Genre.Fantasia,
    photo:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2023/05/brandon-sanderson-min.jpg',
  },
  {
    id: 'f28f1f6b-26cb-4f28-9fe1-ca9f629a5437',
    name: 'Agatha Christie',
    genere: Genre.Misterio,
    photo:
      'https://www.abc.es/xlsemanal/wp-content/uploads/sites/5/2022/09/agatha-christie-desaparicion-once-dias-identidad-falsa-misterio.jpg',
  },
  {
    id: '200cd3cb-2027-4c63-a4d7-7c4dd6041687',
    name: 'Arthur Conan Doyle',
    genere: Genre.Misterio,
    photo:
      'https://cdn.britannica.com/00/79800-050-46931F71/Arthur-Conan-Doyle.jpg',
  },
  {
    id: '0842294f-5678-4d54-8d7d-3987b95b86a3',
    name: 'Edgar Allan Poe',
    genere: Genre.Misterio,
    photo:
      'https://okdiario.com/img/2021/08/03/las-obras-y-frases-mas-importantes-de-edgar-allan-poe-655x368.jpg',
  },
  {
    id: 'ba26fd80-0118-4f6e-ae2a-2a96b7948a76',
    name: 'Raymond Chandler',
    genere: Genre.Misterio,
    photo:
      'https://cdn.britannica.com/99/19299-050-97BD97CF/Raymond-Chandler.jpg',
  },
  {
    id: '5e767116-6874-46cf-9f46-99f1e7aeac5d',
    name: 'Dashiell Hammett',
    genere: Genre.Misterio,
    photo:
      'https://librosdelzorrorojo.com/wp-content/uploads/2018/04/Dashiell-Hammett.png',
  },
  {
    id: '0842294f-5678-4d54-8d7d-3987b95b86a3',
    name: 'Edgar Allan Poe',
    genere: Genre.Misterio,
    photo:
      'https://okdiario.com/img/2021/08/03/las-obras-y-frases-mas-importantes-de-edgar-allan-poe-655x368.jpg',
  },
  {
    id: 'f57cc05b-20ec-479f-831d-aad76c8ca0d6',
    name: 'Emily Brontë',
    genere: Genre.Romance,
    photo: 'https://img.txalaparta.eus/Autores/Emily_Bronte.jpg',
  },
  {
    id: 'a37c46d3-c33d-4efb-bfc0-617ef7bb06f7',
    name: 'Charlotte Brontë',
    genere: Genre.Romance,
    photo:
      'https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_large_1x/public/images/contributor/bronte_360x450.jpg?itok=XfBza_xb&timestamp=1410456062',
  },
];
