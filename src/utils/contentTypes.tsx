interface NavigationLinks {
  id: number;
  href: string;
  name: string;
}

interface HeroContent {
  id: number;
  imageSrc_sm: string;
  imageSrc_md: string;
  imageSrc_lg:string;
  imageAlt: string;
  titlemobile?: string;
  title: string;
  title2: string;
  bodytitle?: string;
  body: string;
  linkText?: string;
  linkHref?:string;
  reverse: boolean;
  background: string;
}

interface Section {
  id: number;
  title: string;
  description: string;
}

interface JoinTheCommunity {
  id: number;
  title: string;
  description: string;
}

interface Contacts {
  email?: string;
  phone?: string;
}

interface OpeningHours {
  id: number;
  day: string;
  hours: string;
}

interface FooterSocial {
  id: number;
  href: string;
  name: string;
}

interface Lessons {
  id: number;
  title: string;
  hours?: string;
  hours2:string;
  description: string;
  button: string;
}

export type {
  NavigationLinks,
  HeroContent,
  Section,
  JoinTheCommunity,
  Contacts,
  OpeningHours,
  FooterSocial,
  Lessons
};
