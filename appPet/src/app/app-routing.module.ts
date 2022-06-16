import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vacinas',
    loadChildren: () => import('./pages/vacinas/vacinas.module').then( m => m.VacinasPageModule)
  },
  {
    path: 'editar-vacinas',
    loadChildren: () => import('./pages/editar-vacinas/editar-vacinas.module').then( m => m.EditarVacinasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
