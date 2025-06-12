import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  standalone: true,
  // Adicione os componentes importados aqui para que o HTML os reconheça
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

}
