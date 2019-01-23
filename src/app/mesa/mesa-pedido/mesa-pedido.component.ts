import { Component, OnInit, Inject, EventEmitter, ViewChild } from '@angular/core';
import { MesaService } from '../mesa.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PedidoItem } from 'src/app/shared/models/pedidoItem.model';
import { MesaPedidos } from 'src/app/shared/models/mesaPedidos.model';

@Component({
  selector: 'app-mesa-pedido',
  templateUrl: './mesa-pedido.component.html',
  styleUrls: ['./mesa-pedido.component.css']
})
export class MesaPedidoComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();
  id: number;
  pedidos: MesaPedidos;
  displayedColumns: string[] = ['menu', 'descricao', 'quantidade'];
  public dataSourceBebida:any;
  public dataSourceCozinha:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<MesaPedidoComponent>,
    public service: MesaService,
    public route: ActivatedRoute,

    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.route.params.subscribe(res => this.id = res.id);
    this.pedidos = new MesaPedidos();
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
    this.service.obtertMenuItens(this.id).subscribe(result => this.pedidos = result);
    this.dataSourceBebida = new MatTableDataSource<PedidoItem>(this.pedidos.pedidoBebidaItens);
    this.dataSourceCozinha = new MatTableDataSource<PedidoItem>(this.pedidos.pedidoComidaItens);

    this.dataSourceBebida.paginator = this.paginator;
    this.dataSourceCozinha.paginator = this.paginator;
  }
}
