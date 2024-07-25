import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/home/Home";
import Menu from "../Pages/shop/Menu";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu/>
        }
        
      ]
    },

    {
      path: "/signup",
      element: <Signup/>
    },

   
   
  ]);

  export default router;

