import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/home/Home";
import Menu from "../Pages/shop/Menu";
import Signup from "../Components/Signup";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../Pages/dashboard/UpdateProfile";
import CartPage from "../Pages/shop/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Users from "../Pages/dashboard/admin/Users";
import Dashboard from "../Pages/dashboard/admin/Dashboard";
import Login from "../Components/Login";
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
    {
      path: "/login",
      element: <Login/>
    },
    {
      path:'dashboard',
      element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      children:[
        {
          path: '',
          element: <Dashboard/>
        },
        {
          path: 'users', 
          element: <Users/>
        },
      ]
    }
   


   
   
  ]);

  export default router;

