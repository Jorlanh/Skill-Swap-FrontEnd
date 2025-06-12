import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  // styleUrls: ['./account.component.css'] // Se houver um arquivo CSS
})
export class AccountComponent implements OnInit {
  user: any = {}; // Defina a estrutura do seu usuário aqui

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Lógica para carregar os dados do usuário, se necessário
    // Ex: this.loadUserData();
  }

  loadUserData() {
    const userId = '123'; // Obtenha o ID do usuário de algum lugar (ex: auth service)
    this.http.get(`${environment.apiUrl}/user/${userId}`).subscribe(data => {
      this.user = data;
    });
  }

  updateUser() {
    if (!this.user || !this.user.id) {
      console.error('ID do usuário não encontrado');
      return;
    }
    const url = `${environment.apiUrl}/user/${this.user.id}`;
    this.http.put(url, this.user).subscribe(
      response => {
        console.log('Usuário atualizado com sucesso', response);
        alert('Dados atualizados!');
      },
      error => {
        console.error('Erro ao atualizar usuário', error);
      }
    );
  }
}