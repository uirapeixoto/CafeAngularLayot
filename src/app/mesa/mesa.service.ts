import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, of } from 'rxjs';
import { NovaMesa } from '../shared/models/novamesa.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Mesa } from '../shared/models/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  mesaUrl: string;
  novamesa: NovaMesa;
  mesa: Mesa;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.mesaUrl = 'http://localhost:5200/api/Mesa/';
        this.novamesa = new NovaMesa();
        this.mesa = new Mesa();
    }

    obterMesasAbertas() {
        return this.http.get(this.mesaUrl + '/MesasAbertas')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    abrirNovaMesa(mesa: NovaMesa): Observable<NovaMesa> {

        return this.http.post(this.mesaUrl + '/abrirnovamesa', mesa)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
