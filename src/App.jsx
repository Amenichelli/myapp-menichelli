
import './App.css';
import CartContextProvider from "./store/CartContextProvider.jsx";
import AppRouter from "./routes/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <AppRouter />
      </CartContextProvider>
    </div>
  );
}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
export default App;
