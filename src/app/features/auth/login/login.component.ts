import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // 1. Importe o Router
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'; // 2. Importe o AuthService
import { HttpErrorResponse } from '@angular/common/http'; // Para tratar erros

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameOrEmail: string = '';
  password: any;
  errorMessage: string | null = null;

  // 3. Injete o AuthService e o Router
  constructor(private authService: AuthService, private router: Router) { }

  // 4. Substitua seu método onSubmit() por este
  onSubmit() {
    this.errorMessage = null;

    if (!this.usernameOrEmail || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    this.authService.login({ usernameOrEmail: this.usernameOrEmail, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login bem-sucedido!', response);
          this.router.navigate(['/home']);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Falha no login:', err);
          if (err.status === 400 || err.status === 401) {
            this.errorMessage = 'Credenciais inválidas. Verifique seu email/usuário e senha.';
          } else {
            this.errorMessage = 'Ocorreu um erro no servidor. Tente novamente mais tarde.';
          }
        }
      });
  }
}