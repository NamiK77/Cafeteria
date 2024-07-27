import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/home/Home";
import Menu from "../Pages/shop/Menu";
import Signup from "../Components/Signup";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../Pages/dashboard/UpdateProfile";
import CartPage from "../Pages/shop/CartPage";

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
          element:<Menu />
        },
        {
          path:"/cart-page",
          element:<CartPage/>

        },
        {
          path:"/Update-profile",
          element:<UpdateProfile/>
        }
        
      ]
    },

    {
      path: "/signup",
      element: <Signup/>
    },

   
   
  ]);

  export default router;

