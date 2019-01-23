import { PedidoItem } from './pedidoItem.model';

export class MesaPedidos {

    id: number;
    mesaId: number;
    pedidoItem: PedidoItem;
    pedidoBebidaItens?: PedidoItem[];
    pedidoComidaItens?: PedidoItem[];
    fatura: number;

    constructor() {
    }
}