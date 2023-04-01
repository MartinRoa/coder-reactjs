import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imagenLogo from "../../images/1216.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className={styles.logo} src={imagenLogo} alt="" />
        </Link>
        <ul className={styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.cursorList}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
