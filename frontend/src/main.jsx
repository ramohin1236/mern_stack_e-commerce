import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="top-right"/>
    <RouterProvider router={router} />
  </Provider>
);
