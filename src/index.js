import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy ,Suspense,useState,useEffect } from "react";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "../components/Grocery";




const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  const [userName,setUserName] =useState();

  useEffect(()=>{
    const data ={
      name:"",
    }
  setUserName(data.name);
  },[])
    return (
      <Provider store={appStore}>
      <div className="app-Layout">
      <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
      </div>
      </Provider>
    )
}
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h2>Loading....</h2>}><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
    ],
    errorElement:<Error />,
  },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
