import ItemList from "./ItemList";
import { useSelector,useDispatch } from "react-redux";
import {clearCart} from "./utils/cartSlice";

const Cart = () => {
    const cartItems= useSelector((store)=> store.cart.Items);
    const dispatch= useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())

    }

    return(
        <div>
            <div className="text-center m-4 p-4 ">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button className="p-2 m-2 bg-green-200 rounded-lg cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0 && <h1>Cart is Empty Please Shop Items</h1>}            
            </div>
            <div className="w-6/12 m-auto">
               <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;