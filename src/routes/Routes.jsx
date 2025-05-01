import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../layouts/Home/Home";
import News from "../components/News/News";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
          index:true, 
          Component:Home
        },
        {
          path: '/category/:id',
          loader: ()=> fetch('../news.json'),
          Component: News
        }
    ]
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  },
  {
    path: '/*',
    element: <div>Error 404</div>
  }
]);