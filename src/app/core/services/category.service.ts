import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Category {
  name: string;
  description: string;
  photo: string;
}


interface State {
  category: Category[]
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  data = signal<State>({
    category: [],
  });

  categoric: Category[] = [
    {
      photo:
        'https://images.pexels.com/photos/7662305/pexels-photo-7662305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Ciencia Ficción',
      description: 'Explora mundos futuros y tecnologías avanzadas.',
    },
    {
      photo:
        'https://images.pexels.com/photos/3747522/pexels-photo-3747522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Literatura Universal',
      description: 'Las mejores obras literarias de todos los tiempos.',
    },
    {
      photo:
        'https://images.pexels.com/photos/2157191/pexels-photo-2157191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Misterio',
      description: 'Novelas llenas de suspenso y enigmas por resolver.',
    },
    {
      photo:
        'https://images.pexels.com/photos/10252340/pexels-photo-10252340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Fantasía',
      description: 'Historias de magia y mundos imaginarios.',
    },
    {
      photo:
        'https://images.pexels.com/photos/415351/pexels-photo-415351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Romance',
      description:
        'Historias de amor y relaciones emocionales, con desafíos y finales felices.',
    },
    {
      photo:
        'https://images.pexels.com/photos/17919908/pexels-photo-17919908/free-photo-of-punto-de-referencia-viaje-viajar-grecia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Philosophy',
      description:
        'Reflexiones profundas sobre el amor y la naturaleza de las relaciones humanas.',
    },
  ];

  constructor() {
    this.getAllCategory();
  }

  getAllCategory(): Observable<Category[]> {
    this.data.set({
      category: this.categoric,
    });
    return of(this.data().category);
  }

  getByNameCategory(category: string): Observable<Category | undefined> {
    const categoric = this.categoric.find((c) => c.name === category);
    return of(categoric);
  }
}
