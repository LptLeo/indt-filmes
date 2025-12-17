import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService)

  // Estado local usando Signals
  isRegistering = signal(false);
  
  // Campos do formulário (Template-driven para simplicidade educacional)
  username = '';
  password = '';
  name = '';

  toggleMode() {
    this.isRegistering.update(v => !v);
  }

  onSubmit() {
    if (this.isRegistering()) {
      const success = this.authService.register({ 
        username: this.username, 
        password: this.password, 
        name: this.name 
      });
      
      if (success) {
        alert('Conta criada com sucesso! Agora faça o login.');
        this.toggleMode();
      } else {
        alert('Este usuário já existe.');
      }
    } else {
      const success = this.authService.login(this.username, this.password);
      if (!success) {
        alert('Usuário ou senha inválidos.');
      }
    }
  }
}
