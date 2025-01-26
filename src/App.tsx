import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "./home/Home.tsx";
import AuthProvider from "./core/context/auth/AuthProvider.tsx";
import Loading from "./core/components/Loading.tsx";
import { ThemeProvider } from "./core/context/theme/ThemeProvider.tsx";
import Dev from "./dev/Dev.tsx";
import NotFound from "./NotFound.tsx";

const Login = lazy(() => import("./auth/Login.tsx"));
const SignUp = lazy(() => import("./auth/SignUp.tsx"));
const ResetPassword = lazy(
  () => import("./auth/resetPassword/ResetPassword.tsx")
);
const Dashboard = lazy(() => import("./dashboard/Dashboard.tsx"));

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
        <AuthProvider>
          <Routes>
            <Route path="/auth">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </ThemeProvider>
  );
}
