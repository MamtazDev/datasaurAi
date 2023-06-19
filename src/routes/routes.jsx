import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <PageOne />,
      },
      {
        path: "/pageTwo",
        element: <PageTwo />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);
