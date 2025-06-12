import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importe RouterModule para usar routerLink

interface NavItem {
  label: string;
  icon: string;
  route: string;
  notificationCount?: number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  // Adicione CommonModule e RouterModule
  imports: [CommonModule, RouterModule], 
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SidebarComponent implements OnInit {

  // Array para guardar os itens do menu, facilitando a manutenção
  public menuItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Populando os itens do menu que você pediu
    this.menuItems = [
      { label: 'Perfil', icon: '👤', route: '/profile' },
      { label: 'Mensagens', icon: '💬', route: '/messages' },
      { label: 'Propostas', icon: '📝', route: '/proposals', notificationCount: 4 },
      { label: 'Comunidades', icon: '👥', route: '/communities' },
      { label: 'Configurações', icon: '⚙️', route: '/settings' },
    ];
  }
}
