import { useState } from "react";
import { AlertInventory } from "./AlertInventory";

export default function Dev() {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => setState(!state)}>ddd</button>
      <AlertInventory isOpen={state} setIsOpen={() => setState(!state)} />
      {/* <ListProductAlert /> */}
    </div>
  );
}
