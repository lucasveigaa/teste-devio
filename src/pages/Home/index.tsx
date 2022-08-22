import categoryDesserts from '../../assets/category-desserts.png';
import categoryDrinks from '../../assets/category-drinks.png';
import categoryHamburguer from '../../assets/category-hamburguer.png';
import categorySideDishes from '../../assets/category-side-dishes.png';
import { Header } from '../../components/Header';
import { ItemCategory } from '../../components/ItemCategory';
import { Container, ContainerCategories, DivItensCategories } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Seja bem vindo!</h1>
          <input placeholder="O que você procura?" type="text" />
        </div>
        <ContainerCategories>
          <h4>Categorias</h4>
          <span>Navegue por categoria</span>
          <DivItensCategories>
            <ItemCategory category="Hamburguer" img={categoryHamburguer} />
            <ItemCategory category="Acompanhamentos" img={categorySideDishes} />
            <ItemCategory category="Bebidas" img={categoryDrinks} />
            <ItemCategory category="Sobremesas" img={categoryDesserts} />
          </DivItensCategories>
        </ContainerCategories>
      </Container>
    </>
  );
}
