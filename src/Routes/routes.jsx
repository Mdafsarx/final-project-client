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
import AddItems from "../Pages/dashboard/AddItems";
import ManageItem from "../Pages/dashboard/ManageItem";
import Update from "../Pages/dashboard/Update";
import Payment from "../Pages/dashboard/Payment";
import PaymentHistory from "../Pages/dashboard/PaymentHistory";
import UserHome from "../Pages/dashboard/UserHome";
import AdminHome from "../Pages/dashboard/AdminHome";
import Cancel from "../Pages/ssl/Cancel";
import Success from "../Pages/ssl/success";
import Fail from "../Pages/ssl/Fail";




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
            {
                path:'pay',
                element:<Payment/>
            },
            {
             path:'history',
             element:<PaymentHistory/>
            },
            {
              path:'userHome',
              element:<UserHome/>
            },

            // add-min routes only

            {
             path:'addItem',
             element:<AdminPrivate><AddItems/></AdminPrivate>
            },
            {
              path:'users',
              element:<AllUsers/>
            },
            {
                path:'manageItem',
                element:<ManageItem/>
            },
            {
                path:'Update/:id',
                element:<Update/>,
                loader:({params})=>fetch(`http://localhost:3000/menu/${params.id}`)

            },
            {
                path:'adminHome',
                element:<AdminPrivate><AdminHome/></AdminPrivate>
            }
        ]
    },


    // ssl
    {
        path:'/cancel',
        element:<Cancel/>
    },
    {
        path:'/Fail',
        element:<Fail/>
    },
    {
        path:'/Success',
        element:<Success/>
    }

])

export default router