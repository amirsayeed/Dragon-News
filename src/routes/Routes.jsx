import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../layouts/Home/Home";
import News from "../components/News/News";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Loading from "../components/Loading/Loading";
import PrivateRoute from "../provider/PrivateRoute";


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
          hydrateFallbackElement: <Loading/>,
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
    path: '/news-details/:id',
    loader: ()=> fetch('../news.json'),
    hydrateFallbackElement: <Loading/>,
    element: <PrivateRoute><NewsDetails/></PrivateRoute>
  },
  {
    path: '/*',
    element: <div>Error 404</div>
  }
]);