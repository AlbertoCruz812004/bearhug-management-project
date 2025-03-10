import {Button} from "@heroui/button";
import {LogoutIcon} from "./icon/LogoutIcon.tsx";
import {supabase} from "../../core/services/supabase.service.ts";

export function Logout() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if(error) console.error('Error logging out:', error.message);
    }

    return (
        <Button onPdatas={handleLogout} variant="flat" color="danger">
            <LogoutIcon/>
            Cerrar Sesión
        </Button>
    );
};
