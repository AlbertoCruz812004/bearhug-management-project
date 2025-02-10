import {RouteObject} from "react-router";
import {lazy} from "react";
import Home from "../home/Home.tsx";
import Dev from "../dev/Dev.tsx";
import NotFound from "../NotFound.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

const Login = lazy(() => import("./../auth/Login.tsx"));
const SignUp = lazy(() => import("./../auth/SignUp.tsx"));
const ResetPassword = lazy(
    () => import("./../auth/resetPassword/ResetPassword.tsx")
);
const Dashboard = lazy(() => import("./../dashboard/Dashboard.tsx"));
const InitialDashboard = lazy(() => import("./../dashboard/components/initialDashboard/InitialDashboard.tsx"));

export const routes: RouteObject[] = [
    {path: "/", element: <Home/>},
    {path: "/dev", element: <Dev/>},
    {
        path: "/auth",
        children: [
            {path: "login", element: <Login/>, index: true},
            {path: "signup", element: <SignUp/>},
            {path: "reset-password", element: <ResetPassword/>},
        ],
    },
    {
        path: "/app",
        children: [
            {path: "initial", element: <PrivateRoute><InitialDashboard/></PrivateRoute>},
            {path: "dashboard", element: <PrivateRoute><Dashboard/></PrivateRoute>},
        ]
    },
    {path: "*", element: <NotFound/>},
];