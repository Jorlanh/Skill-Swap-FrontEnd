import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment'; // 1. Importe o environment

// Interfaces
export interface AuthResponse {
  token: string;
  message: string;
}
export interface LoginData {
  usernameOrEmail: string;
  password?: string;
}

// Adicione esta interface para os dados de registro
export interface RegisterData {
  name?: string;
  email?: string;
  username?: string;
  birthDate?: string; // Enviaremos como string no formato YYYY-MM-DD
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Ajuste a apiUrl para a base da API
  private apiUrl = environment.apiUrl;
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(loginData: LoginData): Observable<AuthResponse> {
    // Usa a apiUrl base + /api/login
    return this.http.post<AuthResponse>(`${this.apiUrl}/api/login`, loginData).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          this.isAuthenticated.next(true);
        }
      })
    );
  }

  // ============== ADICIONADO O MÉTODO REGISTER ==============
  register(registerData: RegisterData): Observable<any> {
    // Usa a apiUrl base + /api/register
    return this.http.post(`${this.apiUrl}/api/register`, registerData);
  }
  // ==========================================================

  logout() {
    localStorage.removeItem('authToken');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
