import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor
import { Router, RouterLink, RouterOutlet } from '@angular/router';   // Para usar routerLink


@Component({
  selector: 'app-configuracoes-gerais',
  
  // ADICIONE ESTA LINHA:
  standalone: true, 

  imports: [
    // E ESTAS DUAS:
    CommonModule,
    RouterLink,
    RouterOutlet
  ],

  templateUrl: './configuracoes-gerais.component.html',
  styleUrls: ['./configuracoes-gerais.component.css']
})

export class ConfiguracoesGeraisComponent {
  constructor(private router: Router) {}

  logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}}
