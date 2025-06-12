// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe HttpClient
import { Observable, tap, BehaviorSubject } from 'rxjs'; // Importe Observable, tap e BehaviorSubject
import { Router } from '@angular/router'; // Importe Router para navegação

// Defina as interfaces para Request e Response DTOs
// Você pode colocar estas interfaces em um arquivo separado (ex: src/app/interfaces/auth.interface.ts)
// para reutilização, mas para fins de clareza, vamos deixá-las aqui por enquanto.

interface LoginRequest {
  usernameOrEmail: string;
  password: string;
  twoFactorCode?: string; // Opcional para 2FA
  twoFactorMethod?: string; // Opcional para 2FA
}

interface LoginResponse {
  token: string;
  message: string;
}

interface ErrorResponse { // Se o backend retornar um objeto de erro
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // A URL base da sua API de login.
  // ATENÇÃO: Substitua 'http://localhost:8080' pela URL real do seu backend Java!
  // A porta padrão do Spring Boot é 8080.
  private apiUrl = 'http://localhost:8080/api/login';

  // BehaviorSubject para gerenciar o estado de login (útil para outros componentes saberem se o user está logado)
  private _isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this._isLoggedIn.asObservable(); // Observable público para observar o estado de login

  constructor(private http: HttpClient, private router: Router) { } // Injete HttpClient e Router

  // Método para fazer a requisição de login
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials)
      .pipe(
        tap(response => {
          // Se o login for bem-sucedido, armazena o token
          if (response && response.token) {
            localStorage.setItem('jwt_token', response.token); // Armazena o token no localStorage
            this._isLoggedIn.next(true); // Atualiza o estado de login
            console.log('Login bem-sucedido! Token JWT armazenado.');
          }
        })
        // Aqui você poderia adicionar catchError para tratar erros,
        // mas vamos tratar no componente por enquanto para simplicidade
      );
  }

  // Método para verificar se o usuário está logado (se tem um token)
  hasToken(): boolean {
    return !!localStorage.getItem('jwt_token'); // Retorna true se o token existir
  }

  // Método para pegar o token
  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  // Método para fazer logout
  logout(): void {
    localStorage.removeItem('jwt_token'); // Remove o token
    this._isLoggedIn.next(false); // Atualiza o estado de login
    this.router.navigate(['/login']); // Redireciona para a página de login
    console.log('Logout realizado. Token JWT removido.');
  }
}