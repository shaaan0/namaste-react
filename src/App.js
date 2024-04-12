import React from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import '../index.css';
import About from './components/About' ;
import ErrorComponent from './components/ErrorComponent'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";

const AppLayout = () => (
    <div>
        <HeaderComponent/>
        <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<MainComponent/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contacts/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/login",
                element:<LoginForm/>
            }
        ],
        errorElement:<ErrorComponent/>

    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)

