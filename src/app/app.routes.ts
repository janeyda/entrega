import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'principal',
    loadComponent: () => import('./principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'rolgestion',
    loadComponent: () => import('./rolgestion/rolgestion.page').then( m => m.RolgestionPage)
  },
  {
    path: 'usuariogestion',
    loadComponent: () => import('./usuariogestion/usuariogestion.page').then( m => m.UsuariogestionPage)
  },
  {
    path: 'perfilgestion',
    loadComponent: () => import('./perfilgestion/perfilgestion.page').then( m => m.PerfilgestionPage)
  },
  {
    path: 'rolregistro',
    loadComponent: () => import('./rolregistro/rolregistro.page').then( m => m.RolregistroPage)
  },
  {
    path: 'perfilregistro',
    loadComponent: () => import('./perfilregistro/perfilregistro.page').then( m => m.PerfilregistroPage)
  },
  {
    path: 'usuarioregistro',
    loadComponent: () => import('./usuarioregistro/usuarioregistro.page').then( m => m.UsuarioregistroPage)
  },
  {
    path: 'perfilmodificar',
    loadComponent: () => import('./perfilmodificar/perfilmodificar.page').then( m => m.PerfilmodificarPage)
  },
  {
    path: 'rolmodificar',
    loadComponent: () => import('./rolmodificar/rolmodificar.page').then( m => m.RolmodificarPage)
  },
  {
    path: 'usuariomodificar',
    loadComponent: () => import('./usuariomodificar/usuariomodificar.page').then( m => m.UsuariomodificarPage)
  },
];
