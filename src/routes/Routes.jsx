import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../layouts/Home/Home";
import News from "../components/News/News";


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
]);