import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";


const AppLayout = () => {

    return (
      <div className="app">
        <Provider store={appStore}>
        <RouterProvider router={appRouter} />
        </Provider>
      </div>
    )
}
 

const appRouter = createBrowserRouter([
{
    path:"/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<Login />
      },
      {
        path:"/browse",
        element:<Browse />
      },
    ]
  },
])
 
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);