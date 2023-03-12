import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName);

    console.log(productosFiltrados)

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(Error);
      });
  }, [categoryName] );

  return <ItemList items={items} />;
};

export default ItemListContainer;
