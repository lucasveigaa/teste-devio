import Modal from 'react-modal';
import baconImg from '../../assets/bacon.png';
import cheedarImg from '../../assets/cheese.png';
import closeIcon from '../../assets/close-icon.svg';
import molhobbqImg from '../../assets/molhobbq.png';
import { CardAdditionalIngredient } from '../CardAdditionalIngredient';
import { CardProdctModal } from '../CardProductModal';
import {
  AdditionalText,
  ContainerAdditionalIngredientes,
  ExplicationText,
} from './styles';

interface ModalRequestProps {
  modalIsOpen: boolean;
  setModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalRequest({
  modalIsOpen,
  setModalisOpen,
}: ModalRequestProps) {
  function closeModal() {
    setModalisOpen(false);
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
        <CardProdctModal />
        <AdditionalText>Adicionais</AdditionalText>
        <ExplicationText>
          Selecione os ingredientes que você quer adicionar a mais no seu
          lanche.
        </ExplicationText>
        <ContainerAdditionalIngredientes>
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
        </ContainerAdditionalIngredientes>
      </div>
    </Modal>
  );
}
