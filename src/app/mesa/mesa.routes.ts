import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaStatusComponent } from './mesa-status/mesa-status.component';
import { MesaAbrirComponent } from './mesa-abrir/mesa-abrir.component';
import { MesaPedidoComponent } from './mesa-pedido/mesa-pedido.component';
import { MesaAbertasComponent } from './mesa-abertas/mesa-abertas.component';

const routes: Routes = [
    {
        path: 'mesa', 
        children: [
            { path: '', component: MesaAbertasComponent },
            { path: 'status', component: MesaStatusComponent },
            { path: 'abrir', component: MesaAbrirComponent },
            { path: 'pedido', component: MesaPedidoComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MesaRouters { }