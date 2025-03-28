import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../icon";

type FooterProps = {
  logo: string;
};

export default function Footer({ logo }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="grid justify-items-center pt-5 pb-8">
      <figure className="flex gap-2 items-center">
        <img
          src={logo}
          alt="logo"
          className="object-cover object-center"
          width={50}
          height={50}
        />
        <h5 className="text-xl font-bold">Bearhug Management</h5>
      </figure>
      <h6 className="text-center">
        ©{year} Bearhug Management. Todos los derechos dataervados
      </h6>
      <ul className="flex gap-4 pt-4 justify-center items-center">
        <li>
          <a href="#">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
