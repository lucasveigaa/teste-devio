import { FaMinus, FaPlus } from 'react-icons/fa';
import imgHamburguer from '../../assets/category-hamburguer.png';
import {
  Container,
  ContainerDescriptionItem,
  ItemValue,
  SubContainer,
} from './styled';

export function CardProdctModal() {
  return (
    <Container>
      <img src={imgHamburguer} alt="Imagem de um hamburger" />
      <SubContainer>
        <ContainerDescriptionItem>
          <strong>Smash da casa</strong>
          <p>
            2x hambúrguer 200g, queijo cheddar, tomate, alface, picles, cebola e
            molho da casa
          </p>
          <div>
            <button type="button">
              <FaMinus />
            </button>
            <span>1</span>
            <button type="button">
              <FaPlus />
            </button>
          </div>
        </ContainerDescriptionItem>
        <ItemValue>R$30,50</ItemValue>
      </SubContainer>
    </Container>
  );
}
