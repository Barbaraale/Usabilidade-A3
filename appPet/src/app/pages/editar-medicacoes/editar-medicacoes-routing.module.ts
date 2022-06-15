import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarMedicacoesPage } from './editar-medicacoes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarMedicacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarMedicacoesPageRoutingModule {}
