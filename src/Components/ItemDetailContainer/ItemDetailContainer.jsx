import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);


  /*   const productSelected = products.find((element) => element.id === Number(id)); */

  const onAdd = (cantidad) => {
    /*     agregarAlCarrito(productSelected) */

    let producto = {
      ...productSelected,
      title: productSelected.title,
      price: productSelected.price,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });

    /*     console.log(`se agregaron al carrito ${cantidad} productos`) */
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
