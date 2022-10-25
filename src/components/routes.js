import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Main from "../layout/Main";
import Courses from "./Courses/Courses";
import AboutUs from "./AboutUs";
import LogIn from "./LogIn";
import SingUp from "./SingUp";
import Blogs from "./Blogs";
import Details from "./Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/courses/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "signup",
        element: <SingUp />,
      },
    ],
  },
]);
