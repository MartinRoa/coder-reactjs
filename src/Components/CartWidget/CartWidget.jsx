import { AiOutlineShoppingCart } from "react-icons/ai";

import {Link} from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart">
    <div>
      <span>0</span>
      <AiOutlineShoppingCart size={50} />
    </div>
    </Link>
  );
};

export default CartWidget;
