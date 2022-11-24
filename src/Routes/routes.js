import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Login/Signup";
import CategoryItems from "../Pages/Home/Categories/CategoryItems";
import ErrorRoute from "../Pages/ErrorRoute/ErrorRoute";
import Blogs from "../Pages/Blogs/Blogs";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <CategoryItems></CategoryItems>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '*',
                element: <ErrorRoute></ErrorRoute>
            }
        ]
    }
])

export default routes;