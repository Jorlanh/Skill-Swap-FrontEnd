import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel
import { RouterLink } from '@angular/router'; // Necessário para routerLink

@Component({
  selector: 'app-cadastro',
  standalone: true,
  // Adicionamos FormsModule e RouterLink aos imports
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  
  // Variáveis para os campos do formulário
  fullName!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  errorMessage: string | null = null;

  constructor() { }

  onSubmit(): void {
    this.errorMessage = null;
    console.log('Tentativa de cadastro com:', {
      fullName: this.fullName,
      email: this.email
    });

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem!';
      return;
    }

    // TODO: Adicionar a lógica para chamar o AuthService e criar a conta
    alert('Cadastro enviado! (Lógica de back-end a ser implementada)');
  }
}
