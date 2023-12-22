import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import MainLayout from "../layout/MainLayout"
import Hero from "../pages/Home/Hero/Hero";

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

        ]
    },


]);

export default myCreatedRouter;