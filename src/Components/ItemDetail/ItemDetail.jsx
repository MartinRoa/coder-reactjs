import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productSelected, onAdd, quantity}) => {
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

export default ItemDetail;