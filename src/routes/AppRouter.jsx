import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer";
import Nosotros from "../pages/main/Nosotros"
import NavBar from "../components/NavBar/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;