import { PedidoItem } from './pedidoItem.model';

export class MesaStatus
{
    mesaId: number;
    numMesa: number;
    pedidsAServir?: PedidoItem;
    pedidosEmPreparacao: PedidoItem;
    pedidosServidos: PedidoItem;
}