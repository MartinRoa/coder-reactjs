import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imagenLogo from "../../images/1216.png"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img className={styles.logo} src={imagenLogo} alt="" />
      <ul className={styles.containerList}>
        <li className={styles.cursorList}>Rubia</li>
        <li className={styles.cursorList}>Roja</li>
        <li className={styles.cursorList}>Negra</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
