import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(()=>{
    setContador(initial)
  }, [initial])

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>Cantidad: {contador}</h2>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={()=> onAdd(contador) }>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
