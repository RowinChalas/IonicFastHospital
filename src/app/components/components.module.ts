import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular'
import { SegmentComponent } from './segment/segment.component'
import { PopoverCerrarSesionComponent } from './popover-cerrar-sesion/popover-cerrar-sesion.component';
import { PopoverMensajesComponent } from './popover-mensajes/popover-mensajes.component';
@NgModule({
  declarations: [
    MenuComponent,
    SegmentComponent,
    PopoverMensajesComponent,
    PopoverCerrarSesionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
    
  ],
  exports:[
    MenuComponent,
    SegmentComponent,
    PopoverMensajesComponent,
    PopoverCerrarSesionComponent
  ]
})
export class ComponentsModule { }
