import logoWhite from "./../../../public/bhm-logo-black-remove.png";

export const Logo = () => {
  return (
    <figure className="flex items-center gap-2">
      <img
        src={logoWhite}
        alt="logo"
        className="object-cover object-center"
        width={50}
        height={50}
      />
      <p className="hidden text-white lg:inline font-bold">
        Bearhug Management
      </p>
    </figure>
  );
};
