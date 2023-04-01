import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const itemsCollection = categoryName ? query(collection(db, "products"), where('category', "==", categoryName)) : collection(db, "products");
   getDocs(itemsCollection).then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

 
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
  
};

export default ItemListContainer;
