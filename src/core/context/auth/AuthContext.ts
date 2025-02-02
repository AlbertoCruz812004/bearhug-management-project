import { createContext, useContext } from "react";
import {Session} from "@supabase/supabase-js";

interface Props {
  session: Session | null;
}

type AuthContextValue = Props | null;

export const AuthContext = createContext<AuthContextValue>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
}
