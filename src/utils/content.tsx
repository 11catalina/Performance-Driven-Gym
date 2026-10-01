import type {
  NavigationLinks,
  Section,
  JoinTheCommunity,
  Contacts,
  OpeningHours,
  FooterSocial,
  HeroContent,
  Lessons,
} from "./contentTypes";

const navigationLinks: NavigationLinks[] = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/about",
    name: "About",
  },
  {
    id: 3,
    href: "/reserve-your-spot",
    name: "Reserve Your Spot",
  },
];

const heroContent: HeroContent[] = [
  {
    id: 1,
    imageSrc_sm: "/Hero_sm.webp",
    imageSrc_md:"/Hero_md.webp",
    imageSrc_lg:"/Hero.webp",
    imageAlt: "Image of people doing squat workouts",
    titlemobile: "For the committed",
    title: "FOR THE",
    title2: "COMMITTED",
    body: "Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.",
    linkText: " About us",
    linkHref: "/about",
    reverse: false,
    background: "bg-secondary",
  },
  {
    id: 2,
    imageSrc_sm: "/HeroAbout_sm.webp",
    imageSrc_md:"/HeroAbout_md.webp",
    imageSrc_lg:"/HeroAbout.webp",
    imageAlt: "image of people fist bumping",
    title: "Tap into Your Primal Power.",
    title2: "Forge a Stronger You.",
    bodytitle: "OUR VISION",
    body: "Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.",
    reverse: true,
    background: "bg-primary",
  },
  {
    id: 3,
    imageSrc_sm: "/HeroAbout2_sm.webp",
    imageSrc_md:"/HeroAbout2_md.webp",
    imageSrc_lg:"/HeroAbout2.webp",
    imageAlt: "Image of person deadlifting with a barbell",
    title: "DYNAMIC OPEN",
    title2: "GYM",
    body: "At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.",
    reverse: false,
    background: "bg-secondary",
  },
];

const section: Section[] = [
  {
    id: 1,
    title: "Guided by experts",
    description:
      "We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.",
  },
  {
    id: 2,
    title: "Dynamic open gym",
    description:
      "Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.",
  },
];
const joinTheCommunity: JoinTheCommunity[] = [
  {
    id: 1,
    title: "Expert Coaching",
    description: "Trainers who are passionate about your progress.",
  },
  {
    id: 2,
    title: "Results-Driven Programs",
    description: "Workouts that deliver tangible, measurable results.",
  },
  {
    id: 3,
    title: "A Supportive Tribe",
    description: "A community that pushes you to be your best.",
  },
];

const contacts: Contacts = {
  email: "hello@react.com",
  phone: "(203) 555-5555",
};

const openingHours: OpeningHours[] = [
  {
    id: 1,
    day: "Mon - Fri",
    hours: "5:00 – 23:00",
  },
  {
    id: 2,
    day: "Saturday",
    hours: "8:00 – 16:00",
  },
  {
    id: 3,
    day: "Sunday",
    hours: "8:00 – 13:00",
  },
  {
    id: 4,
    day: "Holidays",
    hours: "8:00 – 16:00",
  },
];

const footerSocial: FooterSocial[] = [
  {
    id: 1,
    href: "https://www.instagram.com/",
    name: "Instagram",
  },
  {
    id: 2,
    href: "https://www.x.com/",
    name: "X",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
  {
    id: 4,
    href: "https://www.facebook.com/",
    name: "Facebook",
  },
];

const lessons: Lessons[] = [
  {
    id: 1,
    title: "Strength",
    hours: "Weekdays at 6AM",
    hours2: "Weekends and Holidays at 8AM",
    description:
      "Build a foundation of raw power with our comprehensive weightlifting and strength training programs. ",
    button: "reserve your spot",
  },
  {
    id: 2,
    title: "Conditioning",
    hours: "Weekdays at 8AM",
    hours2: "Weekends and Holidays at 10AM",
    description:
      "Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness. ",
    button: "reserve your spot",
  },
  {
    id: 3,
    title: "Community classes",
    hours2: "Every day on the hour",
    description:
      "Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.",
    button: "reserve your spot",
  },
];

export {
  navigationLinks,
  heroContent,
  section,
  joinTheCommunity,
  contacts,
  openingHours,
  footerSocial,
  lessons
};
