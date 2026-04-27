import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import error from "./Error";
import { useSelector } from "react-redux";
import { USER_ICON_URL,LOGO } from "./utils/constants";

const Header = () => {
    const navigate= useNavigate();
    const user =useSelector((store) => store.user);
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    };
    return (
         <div className="absolute w-screen bg-linear-to-b from-black z-10 flex justify-between px-5">
           <img 
            className="w-48"
            src={LOGO}
            alt="app-logo" />
            {user && <div className="flex py-0.5">
            <img className="w-12 h-12 mx-1"
            alt="UserIcon"
            src={USER_ICON_URL} />
            <button onClick={handleLogout} className="bg-red-500 w-20 h-10 rounded-lg cursor-pointer text-white">Sign Out</button>
            </div>}
         </div>
    )
}

export default Header;