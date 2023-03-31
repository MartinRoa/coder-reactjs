import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imagenLogo from "../../images/1216.png";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className={styles.logo} src={imagenLogo} alt="" />
        </Link>
        <ul className={styles.containerList}>
          <Link to="/" className={styles.cursorList}>
            Todas
          </Link>
          <Link to="/category/rubias" className={styles.cursorList}>
            Rubias
          </Link>
          <Link to="/category/rojas" className={styles.cursorList}>
            Rojas
          </Link>
          <Link to="/category/negras" className={styles.cursorList}>
            Negras
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
