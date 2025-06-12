import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login', // Ou 'app-cadastro', dependendo de onde está o campo
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
onSubmit() {
throw new Error('Method not implemented.');
} // Ou CadastroComponent
  
  // ADICIONE A PROPRIEDADE AQUI JUNTO COM AS OUTRAS
  username: string = ''; 
  email: string = '';
  senha: string = '';
password: any;
errorMessage: any;

  constructor() { }

  fazerLogin() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }
}