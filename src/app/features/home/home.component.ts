import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/side-bar/side-bar.component'; // Mantido
import { CommonModule } from '@angular/common';

// Interface ajustada para refletir os dados de um post de feed
interface PostItem {
  id: number;
  user: {
    name: string;
    avatarUrl: string;
  };
  postText: string;
  postImageUrl?: string; // Imagem principal do post (opcional)
  commentCount: number;
  likeCount: number;
  shareCount: number;
  date: Date;
}

// Interface para os cards "Em alta"
interface TrendingItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  isLive?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Dados para os cards "Em Alta"
  trendingItems: TrendingItem[] = [];
  
  // Dados para o feed de posts
  feedItems: PostItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Carrega os dados simulados quando o componente inicia
    this.loadData();
  }

  loadData(): void {
    // Dados simulados para a seção "Em Alta"
    this.trendingItems = [
      { id: 1, title: 'AF-0', subtitle: 'Finished', imageUrl: 'https://placehold.co/200x250/1a1a1a/fff?text=Game', isLive: true },
      { id: 2, title: 'CAESAR', subtitle: 'Douglas Oliveira', imageUrl: 'https://placehold.co/200x250/3b82f6/fff?text=CAESAR' },
      { id: 3, title: '21.05.2025 - 21:00', subtitle: 'AF-0 Finished', imageUrl: 'https://placehold.co/200x250/2a2a2a/fff?text=Score' },
      { id: 4, title: 'Aprendendo juntos', subtitle: 'Fotografia', imageUrl: 'https://placehold.co/200x250/f0f0f0/333?text=Photo' },
    ];

    // Dados simulados para o feed principal
    this.feedItems = [
      {
        id: 1,
        user: { name: 'Douglas Oliveira', avatarUrl: 'https://placehold.co/50x50/e0e0e0/333?text=DO' },
        postText: 'My dog kinda looks like an oil painting in this photo.',
        postImageUrl: 'https://placehold.co/600x400/d9bda5/3b2a1a?text=Dog+Photo',
        commentCount: 12,
        likeCount: 56,
        shareCount: 8,
        date: new Date('2025-06-12T01:15:00')
      },
      {
        id: 2,
        user: { name: 'jonas fergus', avatarUrl: 'https://placehold.co/50x50/c0d6e4/333?text=JF' },
        postText: 'what is his name? wrong answers only',
        postImageUrl: 'https://placehold.co/600x400/d1e0e9/4a6a8a?text=Cat+Photo',
        commentCount: 88,
        likeCount: 102,
        shareCount: 15,
        date: new Date('2025-06-11T22:45:00')
      },
      {
        id: 3,
        user: { name: 'lilacollege', avatarUrl: 'https://placehold.co/50x50/f3e8ff/5b21b6?text=L' },
        postText: 'Busco colegas para troca de habilidades. Tenho 22 anos, sei guitarra e gostaria de aprender a desenhar animes/mangas. Quem estiver interessado, por favor, entrar em contato via DM.',
        commentCount: 4,
        likeCount: 9,
        shareCount: 1,
        date: new Date('2025-06-11T18:20:00')
      }
    ];
  }
}
