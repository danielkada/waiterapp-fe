import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  const waiting: Order[] = [
    {
      _id: '6372e48cbcd195b0d3d0f7f3',
      table: '1',
      status: 'WAITING',
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ],
    }
  ];

  return (
    <Container>
      <OrdersBoard
        icon='🕛'
        title='Fila de espera'
        orders={waiting}
      />

      <OrdersBoard
        icon='🧑‍🍳'
        title='Em preparação'
        orders={[]}
      />

      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={[]}
      />
    </Container>
  );
}
