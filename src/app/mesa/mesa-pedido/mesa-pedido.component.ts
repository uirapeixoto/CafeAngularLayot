import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MesaService } from '../mesa.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mesa-pedido',
  templateUrl: './mesa-pedido.component.html',
  styleUrls: ['./mesa-pedido.component.css']
})
export class MesaPedidoComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<MesaPedidoComponent>,
    public service: MesaService,
    @Inject(MAT_DIALOG_DATA) public data:any,

  ) { }

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
