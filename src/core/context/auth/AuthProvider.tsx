import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {useLocation, useNavigate} from "react-router";
import {SetupAuthListener} from "./setupAuthListener.ts";
import {Session} from "@supabase/supabase-js";
import {supabase} from "../../services/supabase.service.ts";
import Loading from "../../components/Loading.tsx";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  let location = useLocation()

  const navigate = useNavigate();

  useEffect(() => {

    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
      setLoading(false);
    });
    const subscription = SetupAuthListener(setSession, navigate, location);
    console.log("AuthProvider", session);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if(loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}