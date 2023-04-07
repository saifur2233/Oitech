import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";
import About from "../Pages/About/About";
import Team from "../Pages/Team/Team";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Portfolio/Portfolio";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AllMessage from "../Pages/Dashboard/AllMessage";
import AdminLogin from "../Pages/Auth/AdminLogin";
import AdminRegistration from "../Pages/Auth/AdminRegistration";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../Pages/Dashboard/AllServices";
import AddService from "../Pages/Dashboard/AddService";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admin/login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/admin/register",
        element: <AdminRegistration></AdminRegistration>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/message",
        element: (
          <PrivateRoute>
            <AllMessage></AllMessage>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/services",
        element: (
          <PrivateRoute>
            <AllServices></AllServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
