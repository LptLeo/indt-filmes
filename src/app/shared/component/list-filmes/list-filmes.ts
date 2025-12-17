import { Component, input } from '@angular/core';
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
}
