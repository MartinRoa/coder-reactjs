import { AiOutlineShoppingCart } from "react-icons/ai";

import { useContext } from "react";

import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { getTotalQuantity} = useContext(CartContext)

  const total = getTotalQuantity()

  return (
    <Link to="/cart">
    <div>
      <span>{total}</span>
      <AiOutlineShoppingCart size={50} />
    </div>
    </Link>
  );
};

export default CartWidget;
