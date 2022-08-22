import { Container } from './styles';

interface CardItemCategoryProps {
  img: string;
  category: string;
}

export function CardItemCategory({ img, category }: CardItemCategoryProps) {
  return (
    <Container>
      <img src={img} alt="Hamburguer" />
      <strong>{category}</strong>
    </Container>
  );
}
