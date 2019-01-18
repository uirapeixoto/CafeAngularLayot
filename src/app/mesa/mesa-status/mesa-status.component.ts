import { Component, OnInit, Injectable } from '@angular/core';
import { MesaStatus } from 'src/app/shared/models/mesaStatus.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-mesa-status',
  templateUrl: './mesa-status.component.html',
  styleUrls: ['./mesa-status.component.css']
})

@Injectable()
export class MesaStatusComponent implements OnInit {

  public mesaStatus: MesaStatus;
  id: number;

  constructor( private route: ActivatedRoute, private service: MesaService) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.service.obterMesaStatus(this.id).subscribe(status => this.mesaStatus = status)
  }

}
