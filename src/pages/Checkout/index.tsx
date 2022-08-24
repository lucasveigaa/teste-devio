import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { FaCreditCard, FaMoneyBillAlt, FaRegCreditCard } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext';
import { RequestsContext } from '../../contexts/RequestsContext';
import {
  ButtonFinalizeCheckout,
  ClienteInfos,
  Container,
  ContainerAdditionalItens,
  ContainerButtons,
  ContainerChangeValue,
  ContainerClientName,
  ContainerPaymentForm,
  ContainerRequests,
  ContainerTotalAmount,
  ObservationText,
  PaymentForm,
  Requests,
  SubContainer,
  SubContainerRequests,
  SummaryPayment,
} from './styles';

export function Checkout() {
  const {
    cart,
    cleanCart,
    addClient,
    addPaymentForm,
    setChangeValue,
    changeValue,
    paymentForm,
    client,
  } = useContext(CartContext);
  const { addToRequests, requests } = useContext(RequestsContext);
  const [deliveredValue, setDeliveredValue] = useState(0);
  const navigate = useNavigate();

  const totalCartItensValue = cart.reduce(
    (acum, item) => acum + item.sumTotalProduct,
    0,
  );

  function handlePayment(e: ChangeEvent<HTMLInputElement>) {
    addPaymentForm(e.target.value);
  }

  const handleChangeValue =
    deliveredValue > totalCartItensValue
      ? deliveredValue - totalCartItensValue
      : 0;

  function handleFinalizeRequest(e: SyntheticEvent) {
    e?.preventDefault();
    if (paymentForm && client) {
      toast.success('Pedido finalizado com sucesso!');

      const completedRequest = { cart, client, paymentForm };

      addToRequests(completedRequest);
      navigate('/');
      return;
    }
    toast.warn('Preencha o nome do cliente e a forma de pagamento!');
  }

  setChangeValue(handleChangeValue);

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
              <SubContainerRequests key={item.id}>
                <Requests>
                  <div>
                    <span className="amount">{item.amountProduct}x</span>
                    <span>{item.title}</span>
                  </div>
                  <span>R$ {item.price * item.amountProduct}</span>
                </Requests>
                {!!item.observations && (
                  <ObservationText>
                    Observações: {item.observations}
                  </ObservationText>
                )}
                {!!item.additional &&
                  item.additional.map(add => (
                    <ContainerAdditionalItens key={add.title}>
                      <span>{add.title}</span>
                      <span>R$ {add.value}</span>
                    </ContainerAdditionalItens>
                  ))}
              </SubContainerRequests>
            ))}
            <ContainerTotalAmount>
              <span>Total do pedido:</span>
              <strong>R$ {totalCartItensValue}</strong>
            </ContainerTotalAmount>
          </ContainerRequests>
          <ClienteInfos>
            <ContainerClientName>
              <strong>Nome do cliente</strong>
              <input
                onChange={e => addClient(e.target.value)}
                placeholder="Primeiro nome"
                type="text"
                id="clientname"
              />
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
            <input
              onChange={e => handlePayment(e)}
              name="paymentmethod"
              id="debit"
              type="radio"
              value="Débito"
            />
          </PaymentForm>
          <PaymentForm>
            <strong>
              <FaCreditCard color="#095812" />
              Crédito
            </strong>
            <input
              onChange={e => handlePayment(e)}
              name="paymentmethod"
              id="credit"
              type="radio"
              value="Crédito"
            />
          </PaymentForm>
          <PaymentForm>
            <strong>
              <FaMoneyBillAlt color="#095812" /> Dinheiro
            </strong>
            <input
              onChange={e => handlePayment(e)}
              name="paymentmethod"
              id="cash"
              type="radio"
              value="Dinheiro"
            />
          </PaymentForm>
          <ContainerChangeValue>
            <div>
              <strong> Valor entregue</strong>
              <input
                onChange={e => setDeliveredValue(Number(e.target.value))}
                type="text"
                id="deliveredvalue"
              />
            </div>
            <div>
              <strong>Troco</strong>
              <input
                readOnly
                value={changeValue}
                type="text"
                id="changevalue"
              />
            </div>
          </ContainerChangeValue>
        </ContainerPaymentForm>
      </SubContainer>
      <ContainerButtons>
        <Link to="/">
          <ButtonFinalizeCheckout
            onClick={() => cleanCart()}
            variant="white"
            type="button"
          >
            Cancelar
          </ButtonFinalizeCheckout>
        </Link>

        <ButtonFinalizeCheckout
          onClick={e => handleFinalizeRequest(e)}
          variant="green"
          type="submit"
        >
          Finalizar pedido
        </ButtonFinalizeCheckout>
      </ContainerButtons>
    </Container>
  );
}
