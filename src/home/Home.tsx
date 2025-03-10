import logo from "./../../public/logo.png";

import { Featudata } from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Princing } from "./components/pricing/Princing";
import { Team } from "./components/team/Team";
import { Video } from "./components/video/Video";

export default function Home() {
  return (
    <>
      <Header logo={logo} />
      <Video />
      <Featudata />
      <Princing />
      <Team />
      <Footer logo={logo} />
    </>
  );
}
