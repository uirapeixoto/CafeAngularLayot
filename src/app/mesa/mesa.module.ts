import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../material/material.module';
import { MesaStatusComponent } from './mesa-status/mesa-status.component';
import { MesaAbrirComponent } from './mesa-abrir/mesa-abrir.component';
import { MesaPedidoComponent } from './mesa-pedido/mesa-pedido.component';
import { MesaAbertasComponent } from './mesa-abertas/mesa-abertas.component';
import { MesaRouters } from './mesa.routes';
import { MesaService } from './mesa.service';

@NgModule({
  declarations: [
    MesaStatusComponent, 
    MesaAbrirComponent, 
    MesaPedidoComponent, 
    MesaAbertasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MesaRouters
  ],
  exports:[
    MesaRouters
  ],
  providers: [MesaService],
})
export class MesaModule { }
