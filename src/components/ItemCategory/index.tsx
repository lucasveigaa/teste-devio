import { Container } from './styles';

interface ItemCategoryProps {
  img: string;
  category: string;
}

export function ItemCategory({ img, category }: ItemCategoryProps) {
  return (
    <Container>
      <img src={img} alt="Hamburguer" />
      <strong>{category}</strong>
    </Container>
  );
}
