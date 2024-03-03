import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InvalidRoute from "../pages/InvalidRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-new-account",
    element: <Register />,
  },
  {
    path: "/me",
    element: <Profile />,
  },
  {
    path: "*",
    element: <InvalidRoute />,
  },
]);

export default AppRoutes;
