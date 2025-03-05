import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    storage: localStorage,
    storageKey: "auth-token"
  }
});
