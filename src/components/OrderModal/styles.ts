import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 480px;

  border-radius: 8px;
  padding: 32px;

  background: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;

      background: transparent;

      line-height: 0%;;
    }
  }

  .status-container {
      margin-top: 32px;

      small {
        font-size: 14px;

        opacity: 0.8;
      }

      div {
        display: flex;
        align-items: center;

        gap: 8px;
        margin-top: 8px;
      }
    }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;

    opacity: 0.8;
  }
`;
