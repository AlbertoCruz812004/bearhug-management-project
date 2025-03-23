import { Button } from "@heroui/button";
import { LogoutIcon } from "./icon/LogoutIcon.tsx";
import { supabase } from "../../core/services/supabase.service.ts";
import { useNavigate } from "react-router";

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.error("Error logging out:", error.message);
    navigate("/auth/login");
  };

  return (
    <Button onPress={handleLogout} variant="flat" color="danger">
      <LogoutIcon />
      Cerrar Sesión
    </Button>
  );
}
