import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  /* Mi useState va a manejar un objeto y demntro vamos a tener x cantidad de
  llaves que son strings, el arreglo indica que puedo meter cualqueir
  cantidad de keys 
  Lo q hay dentro del useState seria algo como esto:
  '1': {...product1, count: 10}
  '2': {...product2, count: 4} */
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setshoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCart;
