import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { MesaService } from '../mesa.service';
import { Mesa } from 'src/app/shared/models/mesa.model';

@Component({
  selector: 'app-mesa-abertas',
  templateUrl: './mesa-abertas.component.html',
  styleUrls: ['./mesa-abertas.component.css']
})
export class MesaAbertasComponent implements OnInit {

  mesas: Mesa[];

  constructor(private service: MesaService) { }

  ngOnInit() {
    this.service.obterMesasAbertas().subscribe(mesas => this.mesas = mesas);
    debugger
  }
}
