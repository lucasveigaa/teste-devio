import { TypeProduct } from '../../types';
import { BackgroundColor, Container } from './styles';

interface CardProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
  setSelectedProduct: React.Dispatch<React.SetStateAction<TypeProduct>>;
  setModalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CardProduct({
  image,
  title,
  description,
  price,
  id,
  setSelectedProduct,
  setModalisOpen,
}: CardProductProps) {
  function handleProduct() {
    const product = { id, image, title, description, price };
    setSelectedProduct(product);
    setModalisOpen(true);
  }

  return (
    <Container onClick={() => handleProduct()}>
      <BackgroundColor />
      <img src={image} alt="Hamburguer" />
      <strong>{title}</strong>
      <span>{description}</span>
      <strong>R${price}</strong>
    </Container>
  );
}
