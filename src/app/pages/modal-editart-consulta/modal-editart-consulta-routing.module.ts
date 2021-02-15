import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditartConsultaPage } from './modal-editart-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditartConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditartConsultaPageRoutingModule {}
