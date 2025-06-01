// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import firebase from "./assets/images/Skills/Firebase.png";
import mongoose from "./assets/images/Skills/netlify.png";
import sql from "./assets/images/Skills/sql.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";



import project1 from "./assets/images/project/img1.png";
import project2 from "./assets/images/project/img2.png";
import project3 from "./assets/images/project/img3.png";
import person_project from "./assets/images/project/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MERN Stack Developer",
    firstName: "SAITEJA",
    LastName: "NOMULA",
    btnText: "Hire Me",
    image: Hero_person,
    nameFontSize: "1rem", 
    hero_content: [
      {
        count: "3",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Skills I have",
    skills_content: [
      {
        name: "React js",
        para: "Enables dynamic user experiences with state management",
        logo: reactjs,
      },
      {
        name: "Node & Express js",
        para: " Asynchronous, Middleware, Routing, Scalable, Event-driven",
        logo: nodejs,
      },
      {
        name: "Boostrap",
        para: "Responsive, Components, Customizable, Utility classes, Framework",
        logo: ps,
      },
      {
        name: "MongoDB",
        para: "NoSQL, Schema-less, Aggregation, Indexing, Scalable",
        logo: figma, 
      },
      {
        name: "Git & Github",
        para: "Version Control, Collaboration, Branching, Pull Requests, CI/CD",
        logo: sketch,
      },
      {
        name: "Tailwind CSS",
        para: "Responsive, Utility classes, Customization, Design System, Framework",
        logo: python,
      },
      {
        name: "Firebase",
        para: "Authentication, Realtime Database, Cloud Storage, Cloud Functions, Hosting",
        logo: firebase,
      },
      {
        name: "Netlify",
        para: "Deploying and hosting static websites and web applications",
        logo: mongoose,
      },
      {
        name: "SQL",
        para: "Relational, Table, Column, Row, Query, Transaction, Index, Constraint",
        logo: sql,
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend",
        para: "Building creative appealing and interactive user interfaces with light/dark mode and many other functionalities...",
        logo: services_logo1,
      },
      {
        title: "Backend",
        para: "Building the server-side logic and database components that power websites and applications...",
        logo: services_logo2,
      },
      {
        title: "Web Security",
        para: "Implementing security measures to protect against common web vulnerabilities...",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Portfolio",
        image: project1,
        url: "https://teja-portfolio-chi.vercel.app"
      },
      {
        title: "MERN RealEstate",
        image: project2,
        url: "https://real-estate-phi-beige.vercel.app" 
      },
      {
        title: "Ai-travel Planner",
        image: project3,
        url: "https://destiny-trip-ai.netlify.app/" 
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a web developer with a passion for creating beautiful and functional websites. I have a strong understanding of frontend and backend development and I am always looking for new ways to improve my skills.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "saitejanomula143@gmail.com",
        icon: GrMail,
        link: "mailto:saitejanomula143@gmail.com",
      },
      {
        text: "+91 9505993063",
        icon: BsWhatsapp,
        link: "https://wa.me/919505993063",
      },
      {
        text: "blubeast46",
        icon: BsInstagram,
        link: "https://www.instagram.com/__blue_beast__46/",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/saiteja-nomula/",
      },
    ],
  }
};
