import { Bar, DarkModeButton } from "../../../core/components";

import image from "./images/Chasing Money.png";
import HeroImage from "./components/HeroImage";

export default function Header() {
  return (
    <header>
      <Bar isFixed>
        <DarkModeButton />
      </Bar>
      <HeroImage image={image} />
    </header>
  );
}
