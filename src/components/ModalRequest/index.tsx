import Modal from 'react-modal';
import closeIcon from '../../assets/close-icon.svg';
import { CardProdctModal } from '../CardProductModal';

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
      </div>
    </Modal>
  );
}
