import { Bar, DarkModeButton } from "../../../core/components";

import image from "./images/Chasing Money.png";
import HeroImage from "./components/HeroImage";

interface Props {
  logo: string;
}

export default function Header({ logo }: Props) {
  return (
    <header>
      <Bar isFixed image={logo}>
        <DarkModeButton />
      </Bar>
      <HeroImage image={image} />
    </header>
  );
}
