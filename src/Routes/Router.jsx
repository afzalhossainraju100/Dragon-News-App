import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },
  {
    path: "/news",
    element: <div>News Page</div>,
  },
]);

export default router;
