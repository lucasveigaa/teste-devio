import { FaMinus, FaPlus } from 'react-icons/fa';
import { priceFormatter } from '../../utils/formatter';
import {
  Container,
  ContainerDescriptionItem,
  ItemValue,
  SubContainer,
} from './styled';

interface CardProductModalProps {
  amountProduct: number;
  setAmountProduct: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  description: string;
  price: number;
  title: string;
}

export function CardProductModal({
  amountProduct,
  setAmountProduct,
  image,
  description,
  price,
  title,
}: CardProductModalProps) {
  function handleDecreaseAmount() {
    if (amountProduct > 1) {
      setAmountProduct(amountProduct - 1);
    }
  }

  function handleIncreaseAmount() {
    setAmountProduct(amountProduct + 1);
  }

  return (
    <Container>
      <img src={image} alt="Imagem de um hamburger" />
      <SubContainer>
        <ContainerDescriptionItem>
          <strong>{title}</strong>
          <p>{description}</p>
          <div>
            <button onClick={handleDecreaseAmount} type="button">
              <FaMinus />
            </button>
            <span>{amountProduct}</span>
            <button onClick={handleIncreaseAmount} type="button">
              <FaPlus />
            </button>
          </div>
        </ContainerDescriptionItem>
        <ItemValue>{priceFormatter.format(price)}</ItemValue>
      </SubContainer>
    </Container>
  );
}
