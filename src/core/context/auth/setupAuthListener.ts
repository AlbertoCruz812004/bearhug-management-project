import {supabase} from "../../services/supabase.service.ts";
import {Session} from "@supabase/supabase-js";
import {Location} from "react-router";

const routes = {
    login: "/auth/login",
    dashboard: "/app/dashboard",
    signup: "/auth/signup",
}

export const SetupAuthListener = (setSession: (session: Session | null) => void, navigate: (path: string) => void, location: Location<any>) => {
    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
        console.log(event)
        if (event === "TOKEN_REFRESHED") return
        const url = location.pathname;
        console.log(url)

        if (event === "SIGNED_IN" && url === routes.login) {
            navigate(routes.dashboard);
            console.log("render....")
            return;
        }

        if (url === routes.login || url === routes.signup && session) {
            navigate(routes.dashboard);
            console.log("render....")
            return;
        }

        if (event === "SIGNED_OUT") {
            console.log("render....")
            navigate(routes.login);
            setSession(null);
        }
    });

    return subscription;
};