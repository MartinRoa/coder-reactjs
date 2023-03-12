import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{
    console.log(`se agregaron al carrito ${cantidad} productos`)
  }

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <h2>{productSelected.description}</h2>
      <h3>Precio: ${productSelected.price}</h3>
      <h4>Agregar al carrito:</h4>
      <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetailContainer;
