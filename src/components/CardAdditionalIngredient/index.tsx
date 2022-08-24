import { ChangeEvent } from 'react';
import { AdditionalProps } from '../../types';
import { priceFormatter } from '../../utils/formatter';
import { Container, SubContainer } from './styles';

interface CardAdditionalIngredientProps {
  image: string;
  description: string;
  value: number;
  title: string;
  additional: AdditionalProps[];
  setAdditional: React.Dispatch<React.SetStateAction<AdditionalProps[]>>;
}

export function CardAdditionalIngredient({
  image,
  description,
  value,
  title,
  additional,
  setAdditional,
}: CardAdditionalIngredientProps) {
  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const inputvalue = e.target.value;
    const inputChecked = e.target.checked;

    const filteredArray = additional.filter(item => item.title !== inputvalue);

    if (inputChecked) {
      setAdditional([...additional, { title: inputvalue, value }]);
      return;
    }
    setAdditional(filteredArray);
  }

  return (
    <Container>
      <img src={image} alt="Imagem de um bacon" />
      <SubContainer>
        <div>
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
        <span>{priceFormatter.format(value)}</span>
      </SubContainer>
      <input value={title} onChange={e => handleCheckbox(e)} type="checkbox" />
    </Container>
  );
}
