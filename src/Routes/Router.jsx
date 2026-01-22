import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home.jsx";
import CatagoryNews from "../Pages/CatagoryNews.jsx";
import Register from "../Pages/Register.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Pages/Login.jsx";
import NewsDetails from "../Pages/NewsDetails.jsx";
import PrivateRoute from "../Provider/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <CatagoryNews></CatagoryNews>,
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (<PrivateRoute>
      <NewsDetails></NewsDetails>
      </PrivateRoute>),
    loader: ()=>fetch('/news.json')
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
