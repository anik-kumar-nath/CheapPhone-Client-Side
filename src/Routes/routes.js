import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Login/Signup";
import CategoryItems from "../Pages/Home/Categories/CategoryItems";
import ErrorRoute from "../Pages/ErrorRoute/ErrorRoute";
import Blogs from "../Pages/Blogs/Blogs";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Dashboad/Buyer/MyOrders/MyOrders";
import AddProduct from "../Dashboad/Seller/AddProduct/AddProduct";
import MyProducts from "../Dashboad/Seller/MyProducts/MyProducts";
import AllSellers from "../Dashboad/Admin/AllSellers/AllSellers";
import AllBuyers from "../Dashboad/Admin/AllBuyers/AllBuyers";
import ReportedItems from "../Dashboad/Admin/ReportedItems/ReportedItems";
import Landing from "../Dashboad/Landing";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Dashboad/Payment/Payment";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => params.id,
                element: <CategoryItems></CategoryItems>,
                errorElement: <ErrorRoute></ErrorRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Landing></Landing>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>
                    },
                    {
                        path: '/dashboard/addproducts',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <MyProducts></MyProducts>
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AllSellers></AllSellers>
                    },
                    {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers></AllBuyers>
                    },
                    {
                        path: '/dashboard/reporteditems',
                        element: <ReportedItems></ReportedItems>
                    },
                    {
                        path: '/dashboard/payment/:id',
                        element: <Payment></Payment>,
                        loader: ({ params }) => fetch(`https://assignment-12-server-aknathweb.vercel.app/booking/${params.id}`)
                    }
                ]
            },
            {
                path: '*',
                element: <ErrorRoute></ErrorRoute>
            }
        ]
    },
    {
        path: '*',
        element: <h1>page not found</h1>
    }
])

export default routes;