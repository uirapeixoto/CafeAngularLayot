import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { MesaStatus } from 'src/app/shared/models/mesaStatus.model';
import { Http, HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MesaService } from '../mesa.service';
import { PedidoItem } from 'src/app/shared/models/pedidoItem.model';
import { MesaPedidoComponent } from '../mesa-pedido/mesa-pedido.component';

@Component({
  selector: 'app-mesa-status',
  templateUrl: './mesa-status.component.html',
  styleUrls: ['./mesa-status.component.css']
})

@Injectable()
export class MesaStatusComponent implements OnInit {

  displayedColumns: string[] = ['menu', 'descricao', 'quantidade', 'quando', 'servido'];

   mesaStatus?: MesaStatus;
   pedidosAServir?: PedidoItem[];
   dataSource:any;
   dataSourceArray1 =  new MatTableDataSource();
   @ViewChild(MatPaginator) paginator: MatPaginator;

  id: number;
 
  constructor(
    private service: MesaService, 
    private route: ActivatedRoute,
    public dialog: MatDialog ) {
    this.route.params.subscribe(res => this.id = res.id);
    this.mesaStatus = new MesaStatus();
  }

  ngOnInit() {
    this.service.obterMesaStatus(this.id).subscribe(result => this.mesaStatus = result);
    this.dataSource = new MatTableDataSource<PedidoItem>(this.mesaStatus.pedidosAServir);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(MesaPedidoComponent, {
      width: '600px',
      data: 'Add Post'
    });

    dialogRef.componentInstance.event.subscribe(
      (result) => {
        this.service.adicionarPedido(result.data);
        this.dataSource = new MatTableDataSource<PedidoItem>(this.mesaStatus.pedidosAServir);
      });
  }

}
