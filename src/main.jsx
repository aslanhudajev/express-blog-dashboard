import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./components/Routes/Root";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import CreatePost from "./components/Pages/CreatePost";
import Posts from "./components/Pages/Posts";
import EditPost from "./components/Pages/EditPost";
import Error from "./components/Pages/Error";
import ChangePassword from "./components/Pages/ChangePassword";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/edit/:postId",
        element: <EditPost />,
      },
      {
        path: "/password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
