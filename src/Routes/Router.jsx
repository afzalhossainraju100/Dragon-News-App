import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home.jsx";
import CatagoryNews from "../Pages/CatagoryNews.jsx";

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
    element: <div>Auth Page</div>,
  },
  {
    path: "/news",
    element: <div>News Page</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;
