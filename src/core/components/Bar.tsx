import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
  isFixed?: boolean;
}

export const Bar = ({ image, children, isFixed }: Props) => {
  const style = isFixed ? "top-0 fixed w-full z-50" : "";

  return (
    <header
      className={`h-[10svh] ${style} bg-black flex items-center justify-between px-3`}
    >
      <figure className="flex items-center gap-2">
        <img
          src={image}
          alt="logo"
          className="object-cover object-center"
          width={50}
          height={50}
        />
        <p className="hidden text-white lg:inline font-bold">
          BearHugManagement
        </p>
      </figure>
      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
};
//
// {!hiddenRegisterButton && <Button size="sm" color="primary" variant="ghost">registrate</Button>}
// {!hiddenLoginButton && <Button size="sm" color="primary" variant="ghost">inicia sesión</Button>}
// <DarkModeButton/>
