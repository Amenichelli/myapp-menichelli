
import './App.css';
import CartContextProvider from "./store/CartContextProvider.jsx";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </div>
  );
}

export default App;
