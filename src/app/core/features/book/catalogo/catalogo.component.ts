import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatalogoComponent {
  categories: { name: string; description: string; photo: string }[] = [
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
  ];
}
