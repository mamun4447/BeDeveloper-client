import { createBrowserRouter } from "react-router-dom";
import Home from "../components/NavComponent/Home";
import Main from "../layout/Main";
import Courses from "../components/Courses/Courses";
import AboutUs from "../components/NavComponent/AboutUs";
import LogIn from "../components/Authentech/LogIn";
import SingUp from "../components/Authentech/SingUp";
import Blogs from "../components/NavComponent/Blogs";
import Details from "../components/Details";
import ErrorPage from "../components/ErrorPage";
import CheckOut from "../components/Courses/CheckOut";
import FAQ from "../components/NavComponent/FAQ";
import UserProfile from "../components/UserProfile";
import PrivetRoutes from "../components/PrivetRoute/PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/checkout/:id",
        element: (
          <PrivetRoutes>
            <CheckOut />
          </PrivetRoutes>
        ),
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
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);
