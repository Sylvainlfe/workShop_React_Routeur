import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";


// page components

import Home from "./components/Home";
import About from "./components/About";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path:"/",
      element: <Home />
      },
      {
      path:"/About",
      element:<About />
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);