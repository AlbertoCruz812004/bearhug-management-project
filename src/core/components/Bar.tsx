import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}

export const Bar = ({ image, children }: Props) => {
  return (
    <header className="h-[10svh] flex items-center justify-between px-3 bg-black">
      <figure className="flex items-center gap-2">
        <img
          src={image}
          alt="logo"
          className="object-cover object-center"
          width={50}
          height={50}
        />
        <p className="hidden lg:inline font-bold">Bearhug Management</p>
      </figure>
      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
};
//
// {!hiddenRegisterButton && <Button size="sm" color="primary" variant="ghost">registrate</Button>}
// {!hiddenLoginButton && <Button size="sm" color="primary" variant="ghost">inicia sesión</Button>}
// <DarkModeButton/>
