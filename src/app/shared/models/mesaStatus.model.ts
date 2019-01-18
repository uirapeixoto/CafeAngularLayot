import { PedidoItem } from './pedidoItem.model';

export class MesaStatus
{
    mesaId: number;
    numMesa: number;
    pedidosAServir?: PedidoItem;
    pedidosEmPreparacao: PedidoItem;
    pedidosServidos: PedidoItem;
}