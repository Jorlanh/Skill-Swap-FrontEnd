import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // URL foi atualizada para usar a variável de ambiente.
    this.http.post(`${environment.apiUrl}/auth/register`, this.user)
      .subscribe(
        response => {
          console.log('Cadastro bem-sucedido', response);
          this.router.navigate(['/login']); // Redireciona para a página de login após o sucesso
        },
        error => {
          console.error('Erro no cadastro', error);
        }
      );
  }
}