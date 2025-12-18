import { Component, inject } from '@angular/core';
import { FilmeService } from '../../shared/services/filme-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ListFilmes } from '../../shared/component/list-filmes/list-filmes';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ListFilmes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Para que possamos buscar os filmes, injetamos o FilmeService
  // Para isso descomente a linha abaixo
  private filmeService = inject(FilmeService);

  // Criamos um recurso reativo para buscar os filmes populares usando o método getPopularFilmes do FilmeService
  // Para isso, descomente o código abaixo
  filmesResource = rxResource({
    stream: () => this.filmeService.getPopularFilmes(),
  })

}
