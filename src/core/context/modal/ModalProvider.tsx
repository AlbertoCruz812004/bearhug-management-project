import { ReactNode, useState } from "react";
import { ModalContext } from "./ModalContext";

//@deprecated
export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
