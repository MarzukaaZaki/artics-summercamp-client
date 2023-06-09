import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../layout/NotFound";
import Classes from "../pages/Classes/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors/Instructors";

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
        path: '*',
        element: <NotFound></NotFound>
    }
])