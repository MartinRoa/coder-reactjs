import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que quieres borrar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar.",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito vaciado exitosamente!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó.", "", "info");
      }
    });
  };

  const precioTotal = getTotalPrice();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.img} alt="" style={{ width: "200px" }} />
            <h3>Precio: {elemento.price}</h3>
            <h3>Cantidad: {elemento.quantity}</h3>
            <button onClick={() => deleteProductById(elemento.id)}>
              Eliminar
            </button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div>
          <button>Comprar</button>
          <button onClick={clear}>Limpiar carrito</button>
        </div>
      )}

      <h1>El total del carrito es: {precioTotal}</h1>
    </div>
  );
};

export default Cart;
