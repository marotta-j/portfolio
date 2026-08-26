import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import headshot from "@/assets/headshot.png";
import mc from "@/assets/mc.png";
import easypoll from "@/assets/easypoll.png";
import unifi from "@/assets/unifi-ss.png";

export const REPO_URL = "https://github.com/marotta-j/portfolio";

export const sections = [
  { label: "index", to: "/", hash: "index" },
  { label: "projects", to: "/", hash: "projects" },
  { label: "writing", to: "/writing" },
] as const;

const EMAIL = atob("bWFyb3R0YWpAYnUuZWR1");

export const profile = {
  headshot,
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/marotta-joseph/",
      Icon: LinkedInLogoIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/marotta-j",
      Icon: GitHubLogoIcon,
    },
    { label: "Email", href: `mailto:${EMAIL}`, Icon: EnvelopeClosedIcon },
  ],
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  site?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "MissedConnections",
    description:
      "A full-stack iOS application for Boston University students to effortlessly make new connections on campus.",
    tags: ["AWS", "Django", "TypeScript", "React Native"],
    image: mc,
    site: "https://missedconnections.tech/",
  },
  {
    name: "easypoll.xyz",
    description: "Seamlessly create, share, and vote on polls in real-time.",
    tags: ["FastAPI", "Redis"],
    image: easypoll,
    site: "https://easypoll.xyz/",
    github: "https://github.com/marotta-j/easyPoll.xyz",
  },
  {
    name: "unifi",
    description:
      "Your group's AI DJ, queueing music based on whoever's in the room.",
    image: unifi,
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/frankiscuwu/unifi",
  },
];

export const posts = [
  {
    title: "Why learning to code matters in the AI era",
    date: "08-26-2026",
    to: "/writing/why-code-matters",
  },
] as const;
