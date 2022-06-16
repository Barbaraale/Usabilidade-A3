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
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'medicacoes',
  //   loadChildren: () => import('./pages/medicacoes/medicacoes.module').then( m => m.MedicacoesPageModule)
  // },
  // {
  //   path: 'editar-medicacoes',
  //   loadChildren: () => import('./pages/editar-medicacoes/editar-medicacoes.module').then( m => m.EditarMedicacoesPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
