import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para uma notificação.
 * Definida aqui para simplificar, sem criar um arquivo extra.
 */
export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'interest' | 'learning';
  user: {
    name: string;
    avatarUrl: string;
  };
  additionalUsers?: { name: string }[];
  actionText: string;
  targetOwner?: string;
  targetContent?: string;
  contentThumbnailUrl?: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule], // Apenas o CommonModule é necessário para o *ngFor
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  // Array que guardará todas as notificações
  public notifications: Notification[] = [];

  constructor() { }

  ngOnInit(): void {
    // Dados simulados que representam o feed da imagem
    this.notifications = [
      {
        id: '1',
        type: 'like',
        user: { name: 'Vi11_5', avatarUrl: 'https://placehold.co/100x100/e9d5ff/581c87?text=V' },
        actionText: 'Curtiu o vídeo de',
        targetOwner: 'GabiPires701',
        contentThumbnailUrl: 'https://placehold.co/150x150/d1fae5/065f46?text=Video'
      },
      {
        id: '2',
        type: 'interest',
        user: { name: 'shikasape', avatarUrl: 'https://placehold.co/100x100/fef08a/854d0e?text=S' },
        actionText: 'Demonstrou interesse em',
        targetContent: 'Bordado',
        contentThumbnailUrl: 'https://placehold.co/150x150/cffafe/155e75?text=Arte'
      },
      {
        id: '3',
        type: 'like',
        user: { name: 'gatobobo441', avatarUrl: 'https://placehold.co/100x100/fecaca/991b1b?text=G' },
        actionText: 'Curtiu as fotos de',
        targetOwner: 'LEAOjogos',
        contentThumbnailUrl: 'https://placehold.co/150x150/fee2e2/9f1239?text=Fotos'
      },
      {
        id: '4',
        type: 'comment',
        user: { name: 'gatobobo441', avatarUrl: 'https://placehold.co/100x100/fecaca/991b1b?text=G' },
        actionText: 'Comentou nas fotos de',
        targetOwner: 'LEAOjogos',
        contentThumbnailUrl: 'https://placehold.co/150x150/fee2e2/9f1239?text=Fotos'
      },
      {
        id: '5',
        type: 'like',
        user: { name: 'Vi11_5', avatarUrl: 'https://placehold.co/100x100/e9d5ff/581c87?text=V' },
        actionText: 'Curtiu o vídeo de',
        targetOwner: 'Penguingordin5',
        contentThumbnailUrl: 'https://placehold.co/150x150/e0e7ff/3730a3?text=Video'
      },
      {
        id: '6',
        type: 'learning',
        user: { name: 'bellinha_braga', avatarUrl: 'https://placehold.co/100x100/a5f3fc/0e7490?text=B' },
        additionalUsers: [{ name: 'quackxá' }],
        actionText: 'Estão aprendendo juntos',
        contentThumbnailUrl: 'https://placehold.co/150x150/f3e8ff/5b21b6?text=Skill'
      },
    ];
  }
}