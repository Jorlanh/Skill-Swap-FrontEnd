import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// CAMINHO CORRIGIDO
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  user: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadUserData() {
    const userId = '123';
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