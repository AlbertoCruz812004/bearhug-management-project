import { useState } from "react";
import { Notifications } from "./components/Notifications";
import { ExclamationIcon, EyeIcon } from "./icons";
//import { AlertInventory } from "./AlertInventory";

export default function Dev() {
  const [state, setState] = useState(false);

  return (
    <div>
      <button onClick={() => setState(!state)}>ddd</button>
      {/* <AlertInventory isOpen={state} setIsOpen={() => setState(!state)} /> */}
      {/* <ListProductAlert /> */}
      <Notifications
        contentButton={<EyeIcon />}
        isIconOnly
        colorButton="danger"
      >
        <div className="flex items-center text-sm gap-2">
          <ExclamationIcon />
          Tienes inventario bajo
        </div>
      </Notifications>
    </div>
  );
}
