import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMedicacoesPageRoutingModule } from './editar-medicacoes-routing.module';

import { EditarMedicacoesPage } from './editar-medicacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMedicacoesPageRoutingModule
  ],
  declarations: [EditarMedicacoesPage]
})
export class EditarMedicacoesPageModule {}
