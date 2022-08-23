import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import baconImg from '../../assets/bacon.png';
import cheedarImg from '../../assets/cheese.png';
import closeIcon from '../../assets/close-icon.svg';
import molhobbqImg from '../../assets/molhobbq.png';
import { CartContext } from '../../contexts/CartContext';
import { ProductProps, TypeProduct } from '../../types';
import { CardAdditionalIngredient } from '../CardAdditionalIngredient';
import { CardProductModal } from '../CardProductModal';
import {
  ButtonFinalizeRequest,
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
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setProductToCart({ description, id, image, price, title, amountProduct });
  }, [amountProduct]);

  function closeModal() {
    setModalisOpen(false);
  }

  function handleAddToCart(product: ProductProps) {
    addToCart(product);
    closeModal();
    setAmountProduct(1);
  }

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
          image={baconImg}
          title="Bacon"
          value={1.0}
          description="10g"
        />
        <CardAdditionalIngredient
          image={cheedarImg}
          title="Queijo"
          value={1.0}
          description="10g"
        />
        <CardAdditionalIngredient
          image={molhobbqImg}
          title="Molho acompanhamento"
          value={1.0}
          description="Barbecue"
        />
        <TextStrong>Observações</TextStrong>
        <TextAreaObservations placeholder="Adicione uma observação ao pedido" />
        <ContainerFinalizingOrder>
          <SubContainerFinalizingOrder>
            <div>
              <span>1x</span>
              <span>Smash da casa</span>
            </div>
            <span>R$30,50</span>
          </SubContainerFinalizingOrder>
          <ContainerTotalAmount>
            <span>Total do pedido:</span>
            <strong>R$30,50</strong>
          </ContainerTotalAmount>
        </ContainerFinalizingOrder>
        <ContainerButtons>
          <ButtonFinalizeRequest variant="white" type="button">
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
