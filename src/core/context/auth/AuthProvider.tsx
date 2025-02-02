import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";
import {SetupAuthListener} from "./setupAuthListener.ts";
import {Session} from "@supabase/supabase-js";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [session, setSession] = useState<Session | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const subscription = SetupAuthListener(setSession, navigate);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}