import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Authorization/Login";
import Register from "../Authorization/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
      ]
    },
  ]);