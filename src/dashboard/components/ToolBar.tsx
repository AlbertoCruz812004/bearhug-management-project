import { Bar } from "../../core/components";
import image from "./../../../public/logo.png";
import { NotifyIcon } from "../../dev/icons";
import { OptionBar } from "../../dev/components/OptionBar";
import { useState } from "react";
import { User } from "@heroui/user";
import { UserOptions } from "./UserOptions";

export const ToolBar = () => {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);
  return (
    <Bar image={image}>
      <nav className="flex items-center gap-4">
        <OptionBar content={"dfsf"} onClick={handleClick}>
          <NotifyIcon />
        </OptionBar>
        <OptionBar content={<UserOptions />} className="">
          <User
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description="Nuevo usuario"
            name="La bestia"
          />
        </OptionBar>
      </nav>
    </Bar>
  );
};
