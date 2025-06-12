import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importe o RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // 2. Adicione aqui
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { }