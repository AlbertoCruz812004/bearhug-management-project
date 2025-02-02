import {ReactNode} from "react";
import {useAuthContext} from "../core/context/auth/AuthContext.ts";
import {Navigate} from "react-router";

const PrivateRoute = ({ children }: {children: ReactNode}) => {
    const { session } = useAuthContext();
    return session?.user ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;