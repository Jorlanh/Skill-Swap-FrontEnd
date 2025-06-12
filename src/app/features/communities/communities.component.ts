import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngFor, etc.

export interface Community {
  id: string;
  name: string;
  memberCount: number;
  // Um array com as URLs das imagens dos membros para os avatares
  memberAvatars: string[];
}

@Component({
  selector: 'app-communities',
  standalone: true, // Componente standalone
  imports: [CommonModule], // Importa o CommonModule
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.css'
})
export class CommunitiesComponent implements OnInit {

  // Array que vai guardar os dados das comunidades
  public communities: Community[] = [];

  constructor() { }

  // ngOnInit é chamado quando o componente é inicializado
  ngOnInit(): void {
    // Populamos o array com dados simulados (mock data)
    this.communities = [
      { id: 'culinaria', name: 'Culinária', memberCount: 73, memberAvatars: ['p1', 'p2', 'p3'] },
      { id: 'violao', name: 'Violão', memberCount: 329, memberAvatars: ['p4', 'p5', 'p6'] },
      { id: 'latim', name: 'Latim', memberCount: 52, memberAvatars: ['p7', 'p8', 'p9'] },
      { id: 'mixagem', name: 'Mixagem', memberCount: 15, memberAvatars: ['p10', 'p11', 'p12'] },
      { id: 'unhas', name: 'Decoração de unhas', memberCount: 154, memberAvatars: ['p13', 'p14', 'p15'] },
      { id: 'jardinagem', name: 'Jardinagem', memberCount: 85, memberAvatars: ['p16', 'p17', 'p18'] },
      { id: 'maquiagem', name: 'Maquiagem', memberCount: 452, memberAvatars: ['p19', 'p20', 'p21'] },
      { id: 'turco', name: 'Turco', memberCount: 78, memberAvatars: ['p22', 'p23', 'p24'] }
    ];
  }

  // Função para o botão 'Voltar'
  goBack(): void {
    console.log('Navegando de volta...');
    // Lógica de navegação, ex: this.router.navigate(['/']);
  }

  // Função para o botão 'Explorar mais'
  exploreMore(): void {
    console.log('Explorando mais comunidades...');
  }

  // Função para o botão 'Entrar' de cada card
  enterCommunity(community: Community): void {
    console.log(`Entrando na comunidade: ${community.name} (ID: ${community.id})`);
    // Lógica para entrar ou ver detalhes da comunidade
  }
}
