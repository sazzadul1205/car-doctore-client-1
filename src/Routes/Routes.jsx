import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Auth/LogIn.jsx/LogIn";
import SignUp from "../Auth/SignUp.jsx/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
]);

export default router;