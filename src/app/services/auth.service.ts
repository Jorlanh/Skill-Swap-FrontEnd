// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe HttpClient
import { Observable, tap, BehaviorSubject } from 'rxjs'; // Importe Observable, tap e BehaviorSubject
import { Router } from '@angular/router'; // Importe Router para navegação
import { environment } from '../../environments/environment';

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
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
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