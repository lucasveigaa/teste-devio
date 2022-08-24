import { Container } from './styles';

interface CardItemCategoryProps {
  img: string;
  category: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function CardItemCategory({
  img,
  category,
  setActiveCategory,
}: CardItemCategoryProps) {
  return (
    <Container onClick={() => setActiveCategory(category)}>
      <img src={img} alt="Hamburguer" />
      <strong>{category}</strong>
    </Container>
  );
}
