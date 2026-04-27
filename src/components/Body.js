import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";




const Body = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged( auth, (user) => {
        if(user){
            const { uid,email,displayName,photoURL } = user;
            dispatch(addUser({uid : uid, email:email, displayName:displayName,photoURL:photoURL }));
            navigate("/browse");
        }
        else{
            dispatch(removeUser());
            navigate("/");
        }

    });
    return () => unSubscribe();
  },[]);


    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Body;

