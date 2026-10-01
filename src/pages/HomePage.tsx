import Main from "../components/layout/Main";
import HeroHeadline from "../components/HeroHeadline";
import HeroMain from "../components/HeroMain";
import GuidedSection from "../components/GuidedSection";
import CommunityHeadline from "../components/Community/CommunityHeadline";
import DiscoverCommunity from "../components/Community/DiscoverCommunity";
import JoinSection from "../components/JoinSection";
import { heroContent } from "../utils/content";

export default function HomePage() {
  return (
    <Main>
      <HeroHeadline />
      <HeroMain {...heroContent[0]} />
      <GuidedSection />
      <CommunityHeadline />
      <DiscoverCommunity />
      <JoinSection bg="primary" bgButton="secondary" />
    </Main>
  );
}
