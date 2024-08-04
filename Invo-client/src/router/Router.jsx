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
import AddMenu from "../Pages/dashboard/admin/AddMenu";
import ManageItems from "../Pages/dashboard/admin/ManageItems";
import SalesItems from "../Pages/dashboard/admin/SalesItems";
import UpdateMenu from "../Pages/dashboard/admin/UpdateMenu";


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
        {
          path: 'add-menu',
          element: <AddMenu/>
        }, 
        {
          path: "manage-items",
          element: <ManageItems/>
        },
        {
          path: "update-menu/:id",
          element: <UpdateMenu/>,
          loader: ({params}) => fetch(`http://localhost:6001/menu/${params.id}`)
        },
        {
          path: 'sales-items',
          element: <SalesItems/>
        },
      ]
    }
   


   
   
  ]);

  export default router;

