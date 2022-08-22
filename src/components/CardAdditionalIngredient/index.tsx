import { Container, SubContainer } from './styles';

interface CardAdditionalIngredientProps {
  image: string;
  description: string;
  value: number;
  title: string;
}

export function CardAdditionalIngredient({
  image,
  description,
  value,
  title,
}: CardAdditionalIngredientProps) {
  return (
    <Container>
      <img src={image} alt="Imagem de um bacon" />
      <SubContainer>
        <div>
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
        <span>R${value}</span>
      </SubContainer>
      <input type="checkbox" />
    </Container>
  );
}
