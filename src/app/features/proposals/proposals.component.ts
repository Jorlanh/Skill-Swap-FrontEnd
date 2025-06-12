// import { Component } from '@angular/core';
// import { CommonModule, NgClass, NgFor, DatePipe } from '@angular/common';

// interface Proposta {
//   nome?: string;
//   usuario?: string;
//   interesse?: string;
//   data?: string;
//   mensagem?: string;
//   avatar?: string;
//   ajuda?: string;
//   selecionado?: boolean;
// }

// @Component({
//   selector: 'app-proposals',
//   templateUrl: './proposals.component.html',
//   styleUrls: ['./proposals.component.css'],
//   standalone: true,
//   imports: [CommonModule, NgClass, NgFor, DatePipe]
// })

// export class ProposalsComponent {
//   propostas: Proposta[] = [
//     {
//       nome: 'João da Silva',
//       usuario: 'joaosilva',
//       interesse: 'Design UI/UX',
//       data: '2025-06-10',
//       mensagem: 'Posso ajudar com o design da sua plataforma.',
//       avatar: 'avatar1.png',
//       ajuda: 'Design de Interfaces',
//       selecionado: false
//     },
//     {
//       nome: 'Maria Santos',
//       usuario: 'mariasantos',
//       interesse: 'Backend Java',
//       data: '2025-06-09',
//       mensagem: 'Tenho experiência com Spring Boot.',
//       avatar: 'avatar2.png',
//       ajuda: 'Desenvolvimento Backend',
//       selecionado: false
//     }
//   ];

//   propostaSelecionada: Proposta = this.propostas[0];

//   selecionarProposta(proposta: Proposta) {
//     this.propostas.forEach((p) => (p.selecionado = false));
//     proposta.selecionado = true;
//     this.propostaSelecionada = proposta;
//   }

//   aceitarProposta() {
//     console.log(`Proposta de ${this.propostaSelecionada.nome} aceita!`);
//   }

//   recusarProposta() {
//     console.log(`Proposta de ${this.propostaSelecionada.nome} recusada.`);
//   }

//   bloquearProposta() {
//     console.log(`Usuário ${this.propostaSelecionada.nome} bloqueado.`);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// CAMINHO CORRIGIDO
import { environment } from '../../../environments/environment';

export interface Proposal {
  id: number;
  name: string;
  username: string;
  avatar: string;
  joinDate: Date;
  interest: string;
  offering: string;
  message: {
    date: string;
    text: string;
  };
  // 'pending', 'accepted', 'rejected' para controlar o estado
  status: 'pending' | 'accepted' | 'rejected' | 'blocked';
  // 'selected' será usado para destacar o item na lista
  selected?: boolean;
}

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
  proposals: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/proposals`).subscribe(data => {
      this.proposals = data;
    });
  }

  acceptProposal(id: number) {
    console.log(`Proposta ${id} aceita.`);
  }

  rejectProposal(id: number) {
    console.log(`Proposta ${id} rejeitada.`);
  }

  blockProposal(proposal: Proposal | null): void {
    if (proposal) {
      proposal.status = 'blocked';
      console.log(`Usuário ${proposal.name} bloqueado.`);
    }
  }

  // Função para o botão "Voltar"
  goBack(): void {
    console.log('Voltando para a página anterior...');
  }
}


