import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

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
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1000
    })

    
    /*     console.log(`se agregaron al carrito ${cantidad} productos`) */
  };
  
  let quantity = getQuantityById(Number(id));
  console.log(quantity);

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <h2>{productSelected.description}</h2>
      <h3>Precio: ${productSelected.price}</h3>
      <h4>Agregar al carrito:</h4>
      <ItemCount
        onAdd={onAdd}
        stock={productSelected.stock}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
