import AboutImg from "../components/AboutImg";
import Headline from "../components/Headline";
import HeroMain from "../components/HeroMain";
import JoinSection from "../components/JoinSection";
import Main from "../components/layout/Main";
import { heroContent } from "../utils/content";

export default function AboutPage() {
  return (
    <Main>
      <Headline align="start">
        <h1 className="style-h1 ps-5">
          About us
        </h1>
      </Headline>
      <HeroMain {...heroContent[1]} />
      <HeroMain {...heroContent[2]} />
      <AboutImg />
      <JoinSection bg="secondary" bgButton="primary" />
    </Main>
  );
}
