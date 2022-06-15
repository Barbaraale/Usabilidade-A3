import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarVacinasPage } from './editar-vacinas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVacinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarVacinasPageRoutingModule {}
