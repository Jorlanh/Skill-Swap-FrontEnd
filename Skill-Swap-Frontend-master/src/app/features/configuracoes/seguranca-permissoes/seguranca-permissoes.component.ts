import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor
import { RouterLink } from '@angular/router';   // Para usar routerLink

@Component({
  selector: 'app-seguranca-permissoes',
  
  // Faltava esta linha para ele ser um componente independente
  standalone: true, 
  
  // E estas importações para funcionalidades comuns
  imports: [
    CommonModule,
    RouterLink,
 
  ],

  templateUrl: './seguranca-permissoes.component.html',
  
  // Ajustado de 'styleUrl' para 'styleUrls' (com 's' e colchetes)
  styleUrls: ['./seguranca-permissoes.component.css'] 
})
export class SegurancaPermissoesComponent {

}