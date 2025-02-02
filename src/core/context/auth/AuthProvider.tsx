import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";
import {SetupAuthListener} from "./setupAuthListener.ts";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [session, setSession] = useState<unknown>(null);
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
