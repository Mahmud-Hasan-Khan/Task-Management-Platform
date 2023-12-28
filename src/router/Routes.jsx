import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import MainLayout from "../layout/MainLayout"
import DashboardLayout from "../layout/DashboardLayout"
import UserHome from "../pages/Dashboard/UserHome"
import Hero from "../pages/Home/Hero/Hero";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Registration";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Register />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'userHome',
                element: <UserHome />
            }
        ]
    }


]);

export default myCreatedRouter;