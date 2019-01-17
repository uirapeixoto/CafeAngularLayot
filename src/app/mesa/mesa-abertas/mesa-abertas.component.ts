import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Mesa } from 'src/app/shared/models/mesa.model';
import { Garcom } from 'src/app/shared/models/garcom.model';

@Component({
  selector: 'app-mesa-abertas',
  templateUrl: './mesa-abertas.component.html',
  styleUrls: ['./mesa-abertas.component.css']
})
export class MesaAbertasComponent implements OnInit {

  public mesas: Mesa[];
  public Garom: Garcom;
  
  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get('http://localhost:5200/api/Mesa/MesasAbertas').subscribe(result => {
            this.mesas = result.json() as Mesa[];
        }, error => console.error(error));
    }
  ngOnInit() {
  }

}
