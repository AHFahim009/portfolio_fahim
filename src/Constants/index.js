import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import tailwind from "../assets/skills/tailwind.png";
import react from "../assets/skills/reactjs.png";
import mongodb from "../assets/skills/mongodb.png";
import fitventure from "../assets/projects/fitventure.png";
import heroes from "../assets/projects/heroes.png";
import best_shef from "../assets/projects/best_shef.png";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "TAILWIND",
    icon: tailwind,
  },
  {
    name: "REACT JS",
    icon: react,
  },
  {
    name: "MONGODB",
    icon: mongodb,
  },
];

const projects = [
  {
    id: 1,
    name: "FitVenture",
    image: fitventure,
    detail:
      "Summer camp activities website offering students three free activities, promoting fitness through diverse exercise classes led by qualified instructors. Dedicated dashboards for instructors, students, and admins provide personalized features for a seamless user experience.",
  },
  {
    id: 2,
    name: "Heroes",
    image: heroes,
    detail: "i am project 1",
  },
  {
    id: 3,
    name: "Best Shef",
    image: best_shef,
    detail: "i am project 1",
    preview: "https://assignment-shef.web.app/",
  },
];

export { navLinks, skills, projects };
