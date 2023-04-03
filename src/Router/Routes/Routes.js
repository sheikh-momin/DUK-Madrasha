import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MainDashboard from "../../Layout/MainDashboard";
import StudentMoneyDetails from "../../Pages/StudentMoneyDetails/StudentMoneyDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: '*',
        element: <div><h1>404!, Page not found</h1></div>
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <MainDashboard></MainDashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/studentMoneyDetails",
        element: <StudentMoneyDetails></StudentMoneyDetails>
      },
    ]
  },
]);

export default router;