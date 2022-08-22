import categoryDesserts from '../../assets/category-desserts.png';
import categoryDrinks from '../../assets/category-drinks.png';
import categoryHamburguer from '../../assets/category-hamburguer.png';
import categorySideDishes from '../../assets/category-side-dishes.png';
import { CardItemCategory } from '../../components/CardItemCategory';
import { CardProduct } from '../../components/CardProduct';
import { Header } from '../../components/Header';
import { Products } from '../../services/products';
import {
  Container,
  ContainerCategories,
  ContainerProducts,
  DivItensCategories,
  SubContainerProducts,
} from './styles';

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
            <CardItemCategory category="Hambúrguer" img={categoryHamburguer} />
            <CardItemCategory
              category="Acompanhamentos"
              img={categorySideDishes}
            />
            <CardItemCategory category="Bebidas" img={categoryDrinks} />
            <CardItemCategory category="Sobremesas" img={categoryDesserts} />
          </DivItensCategories>
        </ContainerCategories>
        <ContainerProducts>
          <h4>Produtos</h4>
          <span>Selecione um produto para adicionar ao seu pedido</span>
          <SubContainerProducts>
            {Products.map(product => (
              <CardProduct
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </SubContainerProducts>
        </ContainerProducts>
      </Container>
    </>
  );
}
