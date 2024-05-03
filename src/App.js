import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import "../index.css";
import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
import LoginContext from "./utils/LoginContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const data = {
        name:"Gaba"
    }
    setUsername("logout")
  },[])
  return (
    <Provider store={appStore}>

    <LoginContext.Provider value={{loggedInUser: username, update: setUsername }}>
      <div>
        <HeaderComponent />
        <Outlet />
      </div>
    </LoginContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
