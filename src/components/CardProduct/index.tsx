import { BackgroundColor, Container } from './styles';

interface CardProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export function CardProduct({
  image,
  title,
  description,
  price,
}: CardProductProps) {
  return (
    <Container>
      <BackgroundColor />
      <img src={image} alt="Hamburguer" />
      <strong>{title}</strong>
      <span>{description}</span>
      <strong>R${price}</strong>
    </Container>
  );
}
