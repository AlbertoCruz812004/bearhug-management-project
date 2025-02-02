import {ReactNode} from "react";
import {useAuthContext} from "../core/context/auth/AuthContext.ts";
import {Navigate} from "react-router";

const PrivateRoute = ({ children }: {children: ReactNode}) => {
    const { session } = useAuthContext();

    if(!session) {
        return <Navigate to="/auth/login"/>
    }

    return children;
};

export default PrivateRoute;