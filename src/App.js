import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenidos a cerveceria Impronta Roja!"} />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
