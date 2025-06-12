import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngFor, etc.
import { environment } from '../../../environments/environment';

export interface Community {
  id: string;
  name: string;
  memberCount: number;
  // Um array com as URLs das imagens dos membros para os avatares
  memberAvatars: string[];
}

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {
  communities: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/communities`).subscribe(data => {
      this.communities = data;
    });
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
