import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, DatePipe } from '@angular/common';

export interface SearchUser {
  id: string;
  name: string;
  avatarUrl: string;
  helpedCount: number;
  joinDate: Date;
  isTopRated?: boolean;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor, DatePipe],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Termo de busca exibido no campo (pode ser dinâmico no futuro)
  public searchTerm: string = 'Culinária';

  // Array para armazenar os resultados da busca.
  // Em um app real, estes dados viriam de uma chamada de API.
  public searchResults: SearchUser[] = [];

  constructor() { }

  /**
   * ngOnInit é um "gancho" do ciclo de vida do Angular.
   * É o lugar ideal para buscar os dados iniciais do componente.
   */
  ngOnInit(): void {
    // Simulando o carregamento dos dados da busca
    this.searchResults = [
      {
        id: 'user1',
        name: 'JacquinJrJr',
        avatarUrl: 'https://placehold.co/100x100/EFEFEF/333?text=J',
        helpedCount: 574,
        joinDate: new Date('2017-03-28'),
        isTopRated: true // Este usuário terá o destaque
      },
      {
        id: 'user2',
        name: 'iLOVEcook_90',
        avatarUrl: 'https://placehold.co/100x100/EFEFEF/333?text=I',
        helpedCount: 301,
        joinDate: new Date('2020-08-04')
      },
      {
        id: 'user3',
        name: '8283_samurainacozinha',
        avatarUrl: 'https://placehold.co/100x100/EFEFEF/333?text=S',
        helpedCount: 159,
        joinDate: new Date('2021-08-07')
      }
    ];
  }

  /**
   * Função para o botão "Voltar".
   * No futuro, você pode injetar o Router do Angular para navegar.
   */
  goBack(): void {
    // Lógica para voltar para a página anterior.
    // Ex: import { Router } from '@angular/router';
    // constructor(private router: Router) {}
    // this.router.navigate(['/home']);
    console.log('Botão "Voltar" clicado.');
  }

  /**
   * Função para selecionar um usuário.
   * @param userId O ID do usuário que foi clicado.
   */
  selectUser(userId: string): void {
    // Lógica para navegar para o perfil do usuário.
    console.log(`Usuário com ID ${userId} foi selecionado.`);
  }
}
