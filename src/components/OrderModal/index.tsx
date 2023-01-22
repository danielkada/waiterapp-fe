import closeIcon from '../../assets/images/close-icon.svg';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  isVisible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean;
}

export function OrderModal({
  isVisible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  if (!isVisible || !order) {
    return null;
  }

  //let total = 0;
  //order.products.forEach(({ product, quantity}) => {
  // total += product.price * quantity;
  //});

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕛'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>

        </div>

        <OrderDetails>
          <strong>Items</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={`${product.name}`}
                  width={56}
                  height={28}
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE'
            && (
              <button
                type='button'
                className='primary'
                disabled={isLoading}
                onClick={onChangeOrderStatus}
              >
                <span>
                  {order.status === 'WAITING' && '🧑‍🍳'}
                  {order.status === 'IN_PRODUCTION' && '✅'}
                </span>
                <span>
                  {order.status === 'WAITING' && 'Iniciar Produção'}
                  {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                </span>
              </button>
            )}


          <button
            type='button'
            className='secundary'
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            {order.status === 'WAITING' || order.status === 'IN_PRODUCTION' && 'Cancelar pedido'}
            {order.status === 'DONE' && 'Pedido entregue'}
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
