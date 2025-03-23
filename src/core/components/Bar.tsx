import { ReactNode } from "react";
import { Logo } from "./Logo";

interface Props {
  children: ReactNode;
  isFixed?: boolean;
}

export const Bar = ({ children, isFixed }: Props) => {
  const style = isFixed ? "top-0 fixed w-full z-50" : "";

  return (
    <header
      className={`h-[10svh] ${style} bg-black flex items-center justify-between px-3`}
    >
      <Logo />
      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
};
//
// {!hiddenRegisterButton && <Button size="sm" color="primary" variant="ghost">registrate</Button>}
// {!hiddenLoginButton && <Button size="sm" color="primary" variant="ghost">inicia sesión</Button>}
// <DarkModeButton/>
