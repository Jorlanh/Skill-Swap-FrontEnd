import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '', // O caminho padrão para a área logada
    component: MainLayoutComponent, // 1. Carrega a "moldura"
    children: [ // 2. Carrega as páginas DENTRO da moldura como "irmãs"
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'cadastro',
        loadComponent: () => import('./features/auth/cadastro/cadastro').then(m => m.CadastroComponent)
      },
      {
        path: 'configuracoes-gerais',
        loadComponent: () => import('./features/configuracoes/configuracoes-gerais/configuracoes-gerais.component')
          .then(m => m.ConfiguracoesGeraisComponent)
      }, 
      {
       path: 'propostas', // ou o caminho que desejar
  loadComponent: () => import('./features/proposals/proposals.component')
    .then(m => m.ProposalsComponent)},
    { 
        path: 'seguranca-permissoes',
        loadComponent: () => import('./features/configuracoes/seguranca-permissoes/seguranca-permissoes.component')
          .then(m => m.SegurancaPermissoesComponent)
      },

      {
        path: 'historico-acessos',
        loadComponent: () => import('./features/configuracoes/centro-atividade/centro-atividade.component')
          .then(m => m.CentroAtividadeComponent)
      },

      {
        path: 'search',
        loadComponent: () => import('./features/search/search.component')
          .then(m => m.SearchComponent)
      },

      {
        path: 'communities',
        loadComponent: () => import('./features/communities/communities.component')
            .then(m => m.CommunitiesComponent)
      },

      {
        path: 'notifications',
        loadComponent: () => import('./features/user/settings/notifications/notifications.component')
          .then(m => m.NotificationsComponent)
      },

      // Redirecionamento padrão para a 'home'
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // Rotas de tela cheia (sem a sidebar)
  {
    path: 'verification',
    loadComponent: () => import('./features/auth/verification/verification.component')
      .then(m => m.VerificationComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./features/auth/cadastro/cadastro').then(m => m.CadastroComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./features/auth/change-password/change-password.component').then(m => m.ChangePasswordComponent)
  },
  {
    path: 'alteracao-completa',
    loadComponent: () => import('./features/auth/alteracao-completa/alteracao-completa.component').then(m => m.AlteracaoCompletaComponent)
  }
];
