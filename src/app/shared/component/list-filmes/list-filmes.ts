import { Component, ElementRef, input, viewChild } from '@angular/core';
import { Filme } from '../../models/Filme';
import { CommonModule } from '@angular/common';
import { CardFilme } from '../card-filme/card-filme';

@Component({
  selector: 'app-list-filmes',
  imports: [CommonModule, CardFilme],
  templateUrl: './list-filmes.html',
  styleUrl: './list-filmes.css',
})
export class ListFilmes {
 filmes = input.required<Filme[]>();
 titulo = input.required<string>();

 // Referência ao elemento de scroll usando viewChild (Angular 17.3+)
  carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');

  scroll(direction: 'left' | 'right') {
    const el = this.carousel()?.nativeElement;
    if (el) {
      const scrollAmount = 300; // Largura aproximada do card
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  
}
