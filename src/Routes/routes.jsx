import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/menu/OurMenu";
import OurShop from "../Pages/shop/OurShop";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Root/Dashboard";
import MyCard from "../Pages/dashboard/MyCard";
import AllUsers from "../Pages/dashboard/AllUsers";
import AdminPrivate from "./AdminPrivate";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element:<AdminPrivate><OurMenu /></AdminPrivate>
            },
            {
                path: '/ourShop/:category',
                element: <OurShop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },

    {
        path:'dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'myCard',
                element:<MyCard/>,
            },

            // add-min
            {
              path:'users',
              element:<AllUsers/>
            }
        ]
    }

])

export default router