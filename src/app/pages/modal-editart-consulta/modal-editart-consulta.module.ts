import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditartConsultaPageRoutingModule } from './modal-editart-consulta-routing.module';

import { ModalEditartConsultaPage } from './modal-editart-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditartConsultaPageRoutingModule
  ],
  declarations: [ModalEditartConsultaPage]
})
export class ModalEditartConsultaPageModule {}
