import closeIcon from '../../assets/images/close-icon.svg';

import { Order } from '../../types/Order';

import { ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  isVisible: boolean;
  order: Order | null;
  onCloseModal: void;
}

export function OrderModal({ isVisible, order, onCloseModal }: OrderModalProps) {
  if (!isVisible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onCloseModal}>
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
              {order.status === 'IN_PRODUCTION' && '🧑Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>

        </div>

        <OrderDetails>
          <strong>Items</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
