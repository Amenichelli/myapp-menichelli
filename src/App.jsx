import NavBar from "./components/NavBar/NavBar";
import './App.css';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
    <NavBar />
    <div className="cat"><ItemListContainer /></div>
    <ItemDetailContainer />
    </>
  );
}

export default App;
