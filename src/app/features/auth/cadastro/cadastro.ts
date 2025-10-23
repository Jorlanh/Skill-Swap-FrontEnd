import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // 1. Importe o Router
import { FormsModule } from '@angular/forms';
import { AuthService, RegisterData } from '../../../services/auth.service'; // 2. Importe AuthService e RegisterData
import { HttpErrorResponse } from '@angular/common/http'; // Para tratar erros

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  // 3. Objeto para armazenar os dados do formulário
  registerData: RegisterData = {};
  errorMessage: string | null = null;
  successMessage: string | null = null;

  // 4. Injete AuthService e Router
  constructor(private authService: AuthService, private router: Router) {}

  // 5. Substitua o método onSubmit
  onSubmit() {
    this.errorMessage = null;
    this.successMessage = null;

    if (!this.registerData.name || !this.registerData.email || !this.registerData.username || !this.registerData.phoneNumber || !this.registerData.password || !this.registerData.confirmPassword) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    // Chama o serviço de registro
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso!', response);
        this.successMessage = 'Cadastro realizado com sucesso! Verifique seu e-mail para ativar a conta.';
        // Opcional: redirecionar para a página de login após alguns segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000); // Redireciona após 3 segundos
      },
      error: (err: HttpErrorResponse) => {
        console.error('Falha no cadastro:', err);
        // Pega a mensagem de erro específica do backend, se disponível
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else if (err.status === 0) {
            this.errorMessage = 'Não foi possível conectar ao servidor. Verifique se o backend está rodando.';
        } else {
          this.errorMessage = `Ocorreu um erro (${err.status}): ${err.statusText}. Tente novamente.`;
        }
      }
    });
  }
}