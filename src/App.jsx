import NavBar from "./components/NavBar/NavBar";
import './App.css';
import ItemListContainer from "./components/itemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <div className="cat"><ItemListContainer /></div>
    </>
  );
}

export default App;
