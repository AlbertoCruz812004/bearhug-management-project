import { ReactNode } from "react";
import { ConfigurationIcon } from "../icon/ConfigurationIcon";
import { EditIcon } from "../../dev/icons";
import { SwitchDarkMode } from "../../core/components/SwitchDarkMode";
import {Logout} from "../../auth/logout/Logout.tsx";

interface OptionsUser {
  key: string;
  label?: string;
  icon?: ReactNode;
  component?: ReactNode;
}

export const options: OptionsUser[] = [
  {
    key: "edit_profile",
    label: "editar perfil",
    icon: <EditIcon />,
  },
  {
    key: "config",
    label: "configuracion",
    icon: <ConfigurationIcon />,
  },
  {
    key: "darkmode",
    component: <SwitchDarkMode />,
  },
  {
    key: "log-out",
    component: <Logout />
  }
];
