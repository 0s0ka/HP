import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import { FavouritesProvider } from "./provider/FavouritesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavouritesProvider>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </FavouritesProvider>
);
