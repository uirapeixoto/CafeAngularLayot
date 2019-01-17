import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarcomTarefaComponent } from '../garcom/garcom-tarefa/garcom-tarefa.component';
import { GarcomListaComponent } from '../garcom/garcom-lista/garcom-lista.component';

@NgModule({
  declarations: [GarcomTarefaComponent, GarcomListaComponent],
  imports: [
    CommonModule
  ]
})
export class GarcomModule { }
