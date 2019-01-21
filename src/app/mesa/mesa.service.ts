import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, of } from 'rxjs';
import { NovaMesa } from '../shared/models/novamesa.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Mesa } from '../shared/models/mesa.model';
import { APP_API } from '../app.api';
import { MesaStatus } from '../shared/models/mesaStatus.model';
import { DataSource } from '@angular/cdk/table';
import { MenuItem } from '../shared/models/menuItem.model';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  mesaUrl: string;
  novamesa: NovaMesa;
  mesa: Mesa;

    constructor(private http: Http) {
        this.mesaUrl = '${APP_API}+/Mesa/';
        this.novamesa = new NovaMesa();
        this.mesa = new Mesa();
    }

    obterMesasAbertas(): Observable<Mesa[]> {
        return this.http.get( APP_API +'/Mesa/MesasAbertas')
            .map(response => response.json())
            .catch(this.errorHandler);
    }

    abrirNovaMesa(mesa: NovaMesa): Observable<NovaMesa> {

        return this.http.post(this.mesaUrl + '/abrirnovamesa', mesa)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    obterMesaStatus(id: number): Observable<MesaStatus>{
        return this.http.get(APP_API +'/Mesa/Status/'+ id)
            .map(response => response.json() as MesaStatus)
            .catch(this.errorHandler);
    }

    obtertMenuItens(id:number): Observable<MenuItem>{
        return this.http.get(APP_API + '/Pedidos' + id)
        .map(response => response.json() as MenuItem)
        .catch(this.errorHandler);
    }

    adicionarPedido(data) {

    }

    

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}