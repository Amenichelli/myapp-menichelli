import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Nosotros from "./pages/main/Nosotros";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="app">
     <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
