import {CDN_URL} from "./utils/constants";
import {useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector} from "react-redux";

const Header = () => {
    const[btnNameReact,setbtnNamereact] =useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);
    const cartItems= useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="flex justify-between bg-pink-100">
            <img className="w-[150]" src={CDN_URL}/>
             <div className="nav-container ">
                <ul className="flex m-4 p-4 text-lg items-center">
                    <li className="px-4">OnlineStatus:{onlineStatus ? "✅": "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button className="px-1"
                    onClick={() => {
                        btnNameReact === "Login" ? setbtnNamereact("Logout") :setbtnNamereact("Login");
                    }} 
                    >{btnNameReact}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div> 
        </div>
    )
}

export default Header;