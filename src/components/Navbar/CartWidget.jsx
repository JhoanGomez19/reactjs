import { PiShoppingCartSimpleLight } from "react-icons/pi";
import './cartwidget.css'

const CartWidget = () => {

    return(
        <div className="carrito">
            <PiShoppingCartSimpleLight color="red" size={30}/>
            <p className="numero-base">1</p>
        </div>
        
    )
}

export default CartWidget