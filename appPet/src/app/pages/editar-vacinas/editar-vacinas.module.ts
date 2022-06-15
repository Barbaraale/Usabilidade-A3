import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarVacinasPageRoutingModule } from './editar-vacinas-routing.module';

import { EditarVacinasPage } from './editar-vacinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarVacinasPageRoutingModule
  ],
  declarations: [EditarVacinasPage]
})
export class EditarVacinasPageModule {}
