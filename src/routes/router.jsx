import { createBrowserRouter } from "react-router-dom";
import { Favourite } from "../pages/Favourite/Favourite";
import { Home } from "../pages/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "favourite", element: <Favourite /> },
]);
export default router;
