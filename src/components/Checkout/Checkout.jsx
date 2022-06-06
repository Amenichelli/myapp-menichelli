import { CartContext  } from "../../store/CartContextProvider.jsx";
import './Checkout.css';
import Spinner from "../Spinner/Spinner.jsx"
import { collection, addDoc, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext} from 'react';

const Checkout = () => {

    const db = getFirestore();
    const {cartList,emptyCart, getTotal}= useContext(CartContext)

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            emptyCart()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cartList.map(e=> {return {id:e.id,title:e.nombre,price:e.precio,amount:e.quantity}})        
        const total = getTotal(CartContext)
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }
    

    return (
        <>
        <div className="checkout-form">
             <h1>Finalizando Compra</h1>
            <hr />
            
            {load ? <Spinner />
                : (!orderID&&<div>
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input className="input-form"
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input className="input-form"
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input className="input-form"
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input 
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-dark"
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div>
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <Link to="/"><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </div>
           
        </>
    )
}

export default Checkout