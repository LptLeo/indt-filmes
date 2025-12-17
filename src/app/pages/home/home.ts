import { Component, inject } from '@angular/core';
import { FilmeService } from '../../shared/services/filme-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private filmeService = inject(FilmeService);

}
