import { useContext, useState } from 'react';
import categoryDesserts from '../../assets/category-desserts.png';
import categoryDrinks from '../../assets/category-drinks.png';
import categoryHamburguer from '../../assets/category-hamburguer.png';
import categorySideDishes from '../../assets/category-side-dishes.png';
import { CardItemCategory } from '../../components/CardItemCategory';
import { CardProduct } from '../../components/CardProduct';
import { ModalRequest } from '../../components/ModalRequest';
import { CartContext } from '../../contexts/CartContext';
import { Products } from '../../services/products';
import { TypeProduct } from '../../types';
import {
  CancelButton,
  Container,
  ContainerButtons,
  ContainerCategories,
  ContainerProducts,
  ContainerRequests,
  ContainerTotalAmount,
  DivItensCategories,
  FinalizeButton,
  Requests,
  SubContainerProducts,
} from './styles';

export function Home() {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({} as TypeProduct);
  const { cart } = useContext(CartContext);

  const totalCartValue = cart.reduce(
    (acum, item) => acum + item.amountProduct * item.price,
    0,
  );

  return (
    <>
      <ModalRequest
        selectedProduct={selectedProduct}
        modalIsOpen={modalIsOpen}
        setModalisOpen={setModalisOpen}
      />
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
                setModalisOpen={setModalisOpen}
                key={product.id}
                setSelectedProduct={setSelectedProduct}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </SubContainerProducts>
        </ContainerProducts>
        {cart.length && (
          <ContainerRequests>
            {cart.map(item => (
              <Requests key={item.id}>
                <div>
                  <span className="amount">{item.amountProduct}x</span>
                  <span>{item.title}</span>
                </div>
                <span>R$ {item.price * item.amountProduct}</span>
              </Requests>
            ))}
            <ContainerTotalAmount>
              <span>Total do pedido:</span>
              <strong>R$ {totalCartValue}</strong>
            </ContainerTotalAmount>
          </ContainerRequests>
        )}
        <ContainerButtons>
          <div>
            <CancelButton type="button">Cancelar</CancelButton>
            <FinalizeButton onClick={() => setModalisOpen(true)} type="button">
              Finalizar pedido
            </FinalizeButton>
          </div>
        </ContainerButtons>
      </Container>
    </>
  );
}
