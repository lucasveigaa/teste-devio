import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryDesserts from '../../assets/category-desserts.png';
import categoryDrinks from '../../assets/category-drinks.png';
import categoryHamburguer from '../../assets/category-hamburguer.png';
import categorySideDishes from '../../assets/category-side-dishes.png';
import closeIcon from '../../assets/close-icon.svg';
import { CardItemCategory } from '../../components/CardItemCategory';
import { CardProduct } from '../../components/CardProduct';
import { ModalRequest } from '../../components/ModalRequest';
import { CartContext } from '../../contexts/CartContext';
import {
  Desserts,
  Drinks,
  Hamburguers,
  SideDishes,
} from '../../services/products';
import { TypeProduct } from '../../types';
import { priceFormatter } from '../../utils/formatter';
import {
  ButtonRemoveItemCart,
  CancelButton,
  Container,
  ContainerAdditionalItens,
  ContainerButtons,
  ContainerCategories,
  ContainerProducts,
  ContainerRequests,
  ContainerTotalAmount,
  DivItensCategories,
  FinalizeButton,
  ObservationText,
  Requests,
  SubContainerProducts,
  SubContainerRequests,
} from './styles';

export function Home() {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({} as TypeProduct);
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('Hambúrguer');
  const [arrayActiveProduct, setArrayActiveProduct] = useState<TypeProduct[]>(
    [],
  );
  const { cart, cleanCart, removeItemCart } = useContext(CartContext);

  useEffect(() => {
    function activeProduct(typeCategory: string) {
      if (typeCategory === 'Hambúrguer') {
        setArrayActiveProduct(Hamburguers);
      } else if (typeCategory === 'Bebidas') {
        setArrayActiveProduct(Drinks);
      } else if (typeCategory === 'Sobremesas') {
        setArrayActiveProduct(Desserts);
      } else if (typeCategory === 'Acompanhamentos') {
        setArrayActiveProduct(SideDishes);
      }
    }

    activeProduct(activeCategory);
  }, [activeCategory, arrayActiveProduct]);

  const totalCartItensValue = cart.reduce(
    (acum, item) => acum + item.sumTotalProduct,
    0,
  );

  const filteredProducts = arrayActiveProduct.filter(product =>
    product.title.toLowerCase().startsWith(searchText),
  );

  const arrayOfProducts =
    filteredProducts.length > 0 ? filteredProducts : arrayActiveProduct;

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
          <input
            onChange={e => setSearchText(e.target.value)}
            placeholder="O que você procura?"
            type="text"
          />
        </div>
        <ContainerCategories>
          <h4>Categorias</h4>
          <span>Navegue por categoria</span>
          <DivItensCategories>
            <CardItemCategory
              setActiveCategory={setActiveCategory}
              category="Hambúrguer"
              img={categoryHamburguer}
            />
            <CardItemCategory
              setActiveCategory={setActiveCategory}
              category="Acompanhamentos"
              img={categorySideDishes}
            />
            <CardItemCategory
              setActiveCategory={setActiveCategory}
              category="Bebidas"
              img={categoryDrinks}
            />
            <CardItemCategory
              setActiveCategory={setActiveCategory}
              category="Sobremesas"
              img={categoryDesserts}
            />
          </DivItensCategories>
        </ContainerCategories>
        <ContainerProducts>
          <h4>Produtos</h4>
          <span>Selecione um produto para adicionar ao seu pedido</span>
          <SubContainerProducts>
            {arrayOfProducts.map((product, index) => (
              <CardProduct
                index={index}
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
        {!!cart.length && (
          <ContainerRequests>
            {cart.map(item => (
              <SubContainerRequests key={item.id}>
                <ButtonRemoveItemCart
                  type="button"
                  onClick={() => removeItemCart(item)}
                >
                  <img src={closeIcon} alt="Botão de fechar" />
                </ButtonRemoveItemCart>
                <Requests>
                  <div>
                    <span className="amount">{item.amountProduct}x</span>
                    <span>{item.title}</span>
                  </div>
                  <span>
                    {priceFormatter.format(item.price * item.amountProduct)}
                  </span>
                </Requests>
                {item.observations && (
                  <ObservationText>
                    Observações: {item.observations}
                  </ObservationText>
                )}
                {item.additional &&
                  item.additional.map(add => (
                    <ContainerAdditionalItens key={add.title}>
                      <span>{add.title}</span>
                      <span>{priceFormatter.format(Number(add.value))}</span>
                    </ContainerAdditionalItens>
                  ))}
              </SubContainerRequests>
            ))}
            <ContainerTotalAmount>
              <span>Total do pedido:</span>
              <strong>{priceFormatter.format(totalCartItensValue)}</strong>
            </ContainerTotalAmount>
          </ContainerRequests>
        )}
        <ContainerButtons>
          <CancelButton onClick={() => cleanCart()} type="button">
            Cancelar
          </CancelButton>
          <Link to="/checkout">
            <FinalizeButton type="button">Finalizar pedido</FinalizeButton>
          </Link>
        </ContainerButtons>
      </Container>
    </>
  );
}
