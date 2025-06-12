// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/side-bar/side-bar.component'; // Importação adicionada

@Component({
  selector: 'app-root',
  standalone: true,
  // A única responsabilidade dele agora é esta:
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent // Adicionado aqui
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SkillSwap-FrontEnd'; // Esta linha vem por padrão.
}