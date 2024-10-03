import { pages } from "next/dist/build/templates/app-page";
import Link from "next/link";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const birthdate = new Date("2004-08-07");
const today = new Date();
const age = today.getFullYear() - birthdate.getFullYear();

export const siteConfig = {
  title: "Lukas Klockenhoff",
  description: "Personal website of Lukas Klockenhoff",
  siteUrl: "https://lukaskl.com",
  author: "Lukas Klockenhoff",
  socials: {
    twitter: "",
    github: "",
    linkedin: "",
  },
  pages: {
    home: {
      title: "Home",
      link: "/",
      text: (
        <div>
          i am a {age}-year-old student from{" "}
          <span className="font-bold">berlin</span>, germany. i study computer
          science cooperatively with <span className="font-bold">tesla</span> in
          the gigaFactory. I am yet unsure of my career path in software but i
          have gathered lots professional experience in{" "}
          <span className="font-bold">
            full-stack development, web-design and machine learning
          </span>
          . all off which either through projects at tesla, uni or personal
          projects. i am always looking for new opportunities to{" "}
          <span className="font-bold">learn and grow</span>. you can find some
          of my projects and my professional experience{" "}
          <Link href={"/projects"} className="font-bold">
            here
          </Link>
          . apart from that i am a lover of technology, science and design. i
          enjoy good food from all over the world which motivates me to travel
          as much as i can and i am in love with music.{" "}
          <span className="font-bold">enjoy and connect</span> if you would
          like:
        </div>
      ),
    },
    about: {
      title: "About",
      link: "/about",
      text: (
        <div>
          I have been a lover of technology and science since I can remember.
          Computer Science and the art of solving problems with code is my
          passion. Below you can find my professional experience and my
          education - a list that I am constantly working on expanding.
        </div>
      ),
    },
    projects: {
      title: "Projects",
      link: "/projects",
      text: (
        <div>
          Next to my studies, I am developing personal projects to improve my
          programming, design, and architecture skills. Here are some of them
          and the technologies I used. You can find the code on my GitHub via
          the provided link.
        </div>
      ),
    },
    gallery: {
      title: "Gallery",
      link: "/gallery",
      text: <div></div>,
    },
    notFound: {
      title: "Not Found",
      text: <div>{lorem.generateParagraphs(7)}</div>,
    },
  },
  links: {
    footer: [
      {
        title: "Contact",
        url: "mailto:l@lukaskl.com",
      },
      {
        title: "Legal",
        url: "/legal",
      },
    ],
    header: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Projects",
        url: "/projects",
      },
      {
        title: "Gallery",
        url: "/gallery",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
