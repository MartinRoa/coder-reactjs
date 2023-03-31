import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

    const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName);

    console.log(productosFiltrados)

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    let consulta = undefined;
    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  /*   if( items.length === 0 ){
    return <h1>Cargando...</h1>
  } */
  if (items.length === 0) {
    return (
      <div>
        {items.length > 0 ? (
          <ItemList items={items} />
        ) : (
          <ClipLoader
            color={"yellow"}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
    );
  } 
};

export default ItemListContainer;
