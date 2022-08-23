import { useContext } from 'react';
import { FaCreditCard, FaMoneyBillAlt, FaRegCreditCard } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import {
  ButtonFinalizeCheckout,
  ClienteInfos,
  Container,
  ContainerButtons,
  ContainerChangeValue,
  ContainerClientName,
  ContainerPaymentForm,
  ContainerRequests,
  ContainerTotalAmount,
  PaymentForm,
  Requests,
  SubContainer,
  SummaryPayment,
} from './styles';

export function Checkout() {
  const { cart } = useContext(CartContext);

  const totalCartValue = cart.reduce(
    (acum, item) => acum + item.amountProduct * item.price,
    0,
  );

  return (
    <Container>
      <h1>
        <FaCreditCard size={22} color="#095812" />
        Pagamento
      </h1>
      <SubContainer>
        <SummaryPayment>
          <strong>Resumo da compra</strong>
          <ContainerRequests>
            {cart.map(item => (
              <Requests>
                <div>
                  <span className="amount">{item.amountProduct}x</span>
                  <span>{item.title}</span>
                </div>
                <span>R$ {item.price * item.amountProduct}</span>
              </Requests>
            ))}
            <ContainerTotalAmount>
              <span>Total do pedido:</span>
              <strong>R$ {totalCartValue}</strong>
            </ContainerTotalAmount>
          </ContainerRequests>
          <ClienteInfos>
            <ContainerClientName>
              <strong>Nome do cliente</strong>
              <input placeholder="Primeiro nome" type="text" id="clientname" />
            </ContainerClientName>
            <div>
              <strong>Código</strong>
              <input type="text" id="clientcode" />
            </div>
          </ClienteInfos>
        </SummaryPayment>
        <ContainerPaymentForm>
          <strong>Selecione a forma de pagamento:</strong>
          <PaymentForm>
            <strong>
              <FaRegCreditCard color="#095812" />
              Débito
            </strong>
            <input name="paymentmethod" id="debit" type="radio" />
          </PaymentForm>
          <PaymentForm>
            <strong>
              <FaCreditCard color="#095812" />
              Crédito
            </strong>
            <input name="paymentmethod" id="credit" type="radio" />
          </PaymentForm>
          <PaymentForm>
            <strong>
              <FaMoneyBillAlt color="#095812" /> Dinheiro
            </strong>
            <input name="paymentmethod" id="cash" type="radio" />
          </PaymentForm>
          <ContainerChangeValue>
            <div>
              <strong> Valor entregue</strong>
              <input type="text" id="deliveredvalue" />
            </div>
            <div>
              <strong>Troco</strong>
              <input type="text" id="changevalue" />
            </div>
          </ContainerChangeValue>
        </ContainerPaymentForm>
      </SubContainer>
      <ContainerButtons>
        <ButtonFinalizeCheckout variant="white" type="button">
          Cancelar
        </ButtonFinalizeCheckout>
        <ButtonFinalizeCheckout variant="green" type="submit">
          Finalizar pedido
        </ButtonFinalizeCheckout>
      </ContainerButtons>
    </Container>
  );
}
