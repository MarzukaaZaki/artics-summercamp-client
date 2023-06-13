import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../layout/NotFound";
import Classes from "../pages/Classes/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Login from "../layout/Login";
import Register from "../layout/Register";
import Dashboard from "../layout/Dashboard";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/allclasses',
                element: <Classes></Classes>

            },
            {
                path: '/allinstructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: '/dashboard/side',
                element: <p>Hello sidebar only page</p>
            }
        ]

    },
    
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])