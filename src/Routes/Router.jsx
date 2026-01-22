import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home.jsx";
import CatagoryNews from "../Pages/CatagoryNews.jsx";
import Register from "../Pages/Register.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Pages/login.jsx";
import NewsDetails from "../Pages/NewsDetails.jsx";
import PrivateRoute from "../Provider/PrivateRoute.jsx";
import Loading from "../Pages/Loading.jsx";

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
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
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
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
