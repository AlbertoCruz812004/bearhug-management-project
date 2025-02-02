import {supabase} from "../../services/supabase.service.ts";
import {Session} from "@supabase/supabase-js";

export const SetupAuthListener = (setSession: (session: Session | null) => void, navigate: (path: string) => void) => {
    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
        console.log(event);
        if (event === "SIGNED_IN") {
            navigate("/dashboard");
            setSession(session);
            console.log("data session", session);
        }

        if (event === "SIGNED_OUT") {
            navigate("/auth/login");
            setSession(null);
            console.log("data session", session);
        }
    });

    return subscription;
};