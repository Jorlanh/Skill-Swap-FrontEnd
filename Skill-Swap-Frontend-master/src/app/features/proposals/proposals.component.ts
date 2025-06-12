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
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.css'
})
export class ProposalsComponent implements OnInit {

  public proposals: Proposal[] = [];
  public selectedProposal: Proposal | null = null;

  constructor() { }

  ngOnInit(): void {
    // Dados simulados para preencher a tela
    this.proposals = [
      {
        id: 1,
        name: 'coelhorosa',
        username: '@cuuitesx',
        avatar: 'https://placehold.co/100x100/fecaca/991b1b?text=C',
        joinDate: new Date('2022-02-04'),
        interest: 'Turco',
        offering: 'Cerâmica',
        message: {
          date: '4 de Março',
          text: 'oii! :) vi seu perfil, sou muito interessada em turco desde criança e nunca tive oportunidade de, de fato, aprender. acho que seria bom agora já que posso te ajudar com a cerâmica!! <3'
        },
        status: 'pending',
        selected: true // O primeiro item começa selecionado
      },
      {
        id: 2,
        name: 'CATS4LIFE',
        username: '@cats_are_life',
        avatar: 'https://placehold.co/100x100/fed7aa/b45309?text=C',
        joinDate: new Date('2021-11-10'),
        interest: 'Jardinagem',
        offering: 'Inglês',
        message: {
          date: '3 de Março',
          text: 'hi, so i saw that you want to...'
        },
        status: 'accepted'
      },
      {
        id: 3,
        name: 'MORGAN',
        username: '@morgana',
        avatar: 'https://placehold.co/100x100/d1d5db/1f2937?text=M',
        joinDate: new Date('2023-01-15'),
        interest: 'Violão',
        offering: 'Espanhol',
        message: {
          date: '1 de Março',
          text: 'oi quero saber se voce tambero...'
        },
        status: 'rejected'
      },
      {
        id: 4,
        name: 'lerolero',
        username: '@lero_lero',
        avatar: 'https://placehold.co/100x100/a5f3fc/0e7490?text=L',
        joinDate: new Date('2022-08-20'),
        interest: 'Culinária',
        offering: 'Matemática',
        message: {
          date: '28 de Fevereiro',
          text: 'about the lessons abt that thing...'
        },
        status: 'pending'
      }
    ];

    // Define a primeira proposta como a selecionada inicialmente
    this.selectedProposal = this.proposals[0];
  }

  // Função chamada ao clicar em uma proposta na lista
  selectProposal(proposal: Proposal): void {
    // Remove a seleção de todos
    this.proposals.forEach(p => p.selected = false);
    // Seleciona a proposta clicada
    proposal.selected = true;
    this.selectedProposal = proposal;
  }
  
  // Funções de ação
  acceptProposal(proposal: Proposal | null): void {
    if (proposal) {
      proposal.status = 'accepted';
      console.log(`Proposta de ${proposal.name} aceita.`);
    }
  }

  rejectProposal(proposal: Proposal | null): void {
    if (proposal) {
      proposal.status = 'rejected';
      console.log(`Proposta de ${proposal.name} recusada.`);
    }
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


