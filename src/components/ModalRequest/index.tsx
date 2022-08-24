import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import baconImg from '../../assets/bacon.png';
import cheedarImg from '../../assets/cheese.png';
import closeIcon from '../../assets/close-icon.svg';
import molhobbqImg from '../../assets/molhobbq.png';
import { CartContext } from '../../contexts/CartContext';
import { AdditionalProps, ProductProps, TypeProduct } from '../../types';
import { CardAdditionalIngredient } from '../CardAdditionalIngredient';
import { CardProductModal } from '../CardProductModal';
import {
  ButtonFinalizeRequest,
  ContainerAdditionals,
  ContainerButtons,
  ContainerFinalizingOrder,
  ContainerTotalAmount,
  ExplicationText,
  SubContainerFinalizingOrder,
  TextAreaObservations,
  TextStrong,
} from './styles';

interface ModalRequestProps {
  modalIsOpen: boolean;
  setModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: TypeProduct;
}

export function ModalRequest({
  modalIsOpen,
  setModalisOpen,
  selectedProduct,
}: ModalRequestProps) {
  const { description, id, image, price, title } = selectedProduct;
  const [amountProduct, setAmountProduct] = useState(1);
  const [productToCart, setProductToCart] = useState({} as ProductProps);
  const [observations, setObservations] = useState('');
  const [additional, setAdditional] = useState<AdditionalProps[]>([]);

  const { addToCart } = useContext(CartContext);

  function closeModal() {
    setModalisOpen(false);
    setAmountProduct(1);
    setObservations('');
    setAdditional([]);
  }
  const sumAdditionalValues = additional.reduce((acum, add) => {
    if (add.value !== undefined) {
      return acum + add.value;
    }
    return acum;
  }, 0);

  function handleAddToCart(product: ProductProps) {
    addToCart(product);
    closeModal();
    setAmountProduct(1);
    setObservations('');
    setAdditional([]);
  }

  const sumTotalProduct = amountProduct * price + sumAdditionalValues;

  useEffect(() => {
    setProductToCart({
      description,
      id,
      image,
      price,
      title,
      amountProduct,
      observations,
      additional,
      sumTotalProduct,
    });
  }, [modalIsOpen, amountProduct, observations, additional]);

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={() => closeModal()}
      isOpen={modalIsOpen}
    >
      <div>
        <button
          className="react-modal-close"
          type="button"
          onClick={closeModal}
        >
          <img src={closeIcon} alt="Botão para fechar o modal" />
        </button>
        <h1>Revise seu pedido!</h1>
        <CardProductModal
          amountProduct={amountProduct}
          setAmountProduct={setAmountProduct}
          image={image}
          description={description}
          title={title}
          price={price}
        />
        <TextStrong>Adicionais</TextStrong>
        <ExplicationText>
          Selecione os ingredientes que você quer adicionar a mais no seu
          lanche.
        </ExplicationText>
        <CardAdditionalIngredient
          additional={additional}
          setAdditional={setAdditional}
          image={baconImg}
          title="Bacon"
          value={1}
          description="10g"
        />
        <CardAdditionalIngredient
          additional={additional}
          setAdditional={setAdditional}
          image={cheedarImg}
          title="Queijo"
          value={1}
          description="10g"
        />
        <CardAdditionalIngredient
          additional={additional}
          setAdditional={setAdditional}
          image={molhobbqImg}
          title="Molho acompanhamento"
          value={1}
          description="Barbecue"
        />
        <TextStrong>Observações</TextStrong>
        <TextAreaObservations
          value={observations}
          onChange={e => setObservations(e.target.value)}
          placeholder="Adicione uma observação ao pedido"
        />
        <ContainerFinalizingOrder>
          <SubContainerFinalizingOrder>
            <div>
              <span>{amountProduct}x</span>
              <span> {title}</span>
            </div>
            <span>R$ {price}</span>
          </SubContainerFinalizingOrder>
          {!!additional &&
            additional.map(add => (
              <ContainerAdditionals key={add.title}>
                <div>
                  <span> {add.title}</span>
                </div>
                <span>R$ {add.value}</span>
              </ContainerAdditionals>
            ))}
          <ContainerTotalAmount>
            <span>Total do pedido:</span>
            <strong>R$ {sumTotalProduct}</strong>
          </ContainerTotalAmount>
        </ContainerFinalizingOrder>
        <ContainerButtons>
          <ButtonFinalizeRequest
            onClick={() => closeModal()}
            variant="white"
            type="button"
          >
            Continuar adicionando
          </ButtonFinalizeRequest>
          <ButtonFinalizeRequest
            variant="green"
            type="button"
            onClick={() => handleAddToCart(productToCart)}
          >
            Adicionar ao pedido
          </ButtonFinalizeRequest>
        </ContainerButtons>
      </div>
    </Modal>
  );
}
