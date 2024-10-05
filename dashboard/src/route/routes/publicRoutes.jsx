import { lazy } from "react";


const Login = lazy(() => import("../../views/auth/Login"));
const Registration = lazy(() => import("../../views/auth/Registration"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
