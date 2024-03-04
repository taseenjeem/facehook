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
    errorElement: <InvalidRoute />,
  },
  {
    path: "/home",
    element: <LandingPage />,
    errorElement: <InvalidRoute />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <InvalidRoute />,
  },
  {
    path: "/create-new-account",
    element: <Register />,
    errorElement: <InvalidRoute />,
  },
  {
    path: "/me",
    element: <Profile />,
    errorElement: <InvalidRoute />,
  },
]);

export default AppRoutes;
