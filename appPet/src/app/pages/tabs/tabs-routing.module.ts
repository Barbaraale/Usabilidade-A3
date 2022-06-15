import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'vacinas',
        loadChildren: () => import('../vacinas/vacinas.module').then(m => m.VacinasPageModule)
      },
      {
        path: 'medicacoes',
        loadChildren: () => import('../medicacoes/medicacoes.module').then(m => m.MedicacoesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/vacinas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/vacinas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class TabsPageRoutingModule {}
