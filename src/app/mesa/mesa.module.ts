import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaStatusComponent } from './mesa-status/mesa-status.component';
import { MesaAbrirComponent } from './mesa-abrir/mesa-abrir.component';
import { MesaPedidoComponent } from './mesa-pedido/mesa-pedido.component';
import { MesaAbertasComponent } from './mesa-abertas/mesa-abertas.component';

@NgModule({
  declarations: [MesaStatusComponent, MesaAbrirComponent, MesaPedidoComponent, MesaAbertasComponent],
  imports: [
    CommonModule
  ]
})
export class MesaModule { }
