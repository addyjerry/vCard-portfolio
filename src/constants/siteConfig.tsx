import {
  NextJSIcon,
  NodeJS,
  ReactIcon,
  Redux,
  Sanity,
  Tailwind,
  Zustand,
} from "@/icons/icons";
import { Calendar, LocationEditIcon, Mail, Phone } from "lucide-react";
import { title } from "process";
import React from "react";
import About from "../components/about";
import Resume from "../components/resume";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
export const personal = {
  email: {
    title: "EMAIL",
    link: "addyjerry2704@gmail.com",
    icon: <Mail />,
  },
  phone: {
    title: "PHONE",
    link: "+233 50 500 9586",
    icon: <Phone />,
  },
  birthday: {
    title: "BIRTHDAY",
    link: "April 27, 2002",
    icon: <Calendar />,
  },
  location: {
    title: "LOCATION",
    link: "Accra - Ghana",
    icon: <LocationEditIcon />,
  },
};

export const about = [
  {
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level",
    icon: "/svgs/icon-design.svg",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and functional websites using the latest technologies.",
    icon: "/svgs/icon-dev.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for both iOS and Android platforms.",
    icon: "/svgs/icon-app.svg",
  },
  {
    title: "Photography",
    description:
      "I make high-quality photos of any category at a professional level.",
    icon: "/svgs/icon-photo.svg",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    avatar: "/avatar-1.png",
    feedback: "This is the best service I have ever used. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    avatar: "/avatar-2.png",
    feedback: "Amazing experience! Bishop was very professional.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    avatar: "/avatar-3.png",
    feedback: "I loved the final product! Will definitely work with him again.",
    rating: 5,
  },
  {
    name: "Bob Brown",
    avatar: "/avatar-4.png",
    feedback: "Bishop was very helpful and delivered on time.",
    rating: 4,
  },
];
export const clients = [
  "/svgs/logo-1-color.png",
  "/svgs/logo-2-color.png",
  "/svgs/logo-3-color.png",
  "/svgs/logo-4-color.png",
  "/svgs/logo-5-color.png",
];

export const projects = [
  {
    title: "Movie Streaming Website",
    description:
      "A full-featured movie streaming website built with React and Node.js, featuring user authentication, video management, and a secure payment gateway.",
    image: "/projects/kdn.PNG",
    link: "https://kdnplus.com/landing",
    name: "KDN PLUS",
    techStack: [
      <NextJSIcon key={0} />,
      <Tailwind key={1} />,
      <NodeJS key={2} />,
      <Zustand key={3} />,
    ],
  },
  {
    title: "Ecommerce Website",
    description:
      "A full-featured ecommerce website built with React and Node.js, featuring user authentication, product management, and a secure payment gateway.",
    image: "/projects/adom.PNG",
    link: "https://adomrepairshop.netlify.app/",
    name: "ADOM REPAIRSHOP",
    techStack: [
      <NextJSIcon key={0} />,
      <Tailwind key={1} />,
      <Zustand key={2} />,
      <Sanity key={3} />,
    ],
  },
  {
    title: "Service Ordering Website",
    description:
      "A full-featured service ordering website built with React and Node.js, featuring user authentication, product management, and a secure payment gateway.",
    image: "/projects/azpros.PNG",
    link: "https://azpros.netlify.app/",
    name: "AZPROS",
    techStack: [
      <ReactIcon key={0} />,
      <Tailwind key={1} />,

      <Zustand key={2} />,
    ],
  },
  {
    title: "Project Management App",
    description:
      "A full-featured project management website built with Next js and Firebase, featuring user authentication, video management, and a secure payment gateway.",
    image: "/projects/dashboard.PNG",
    link: "https://taskidio.netlify.app/",
    name: "TASKIDIO",
    techStack: [
      <ReactIcon key={0} />,
      <Tailwind key={1} />,
      <Zustand key={2} />,
    ],
  },
  {
    title: "Restaurant Website",
    description:
      "A full-featured restaurant website built with React and Node.js, featuring user authentication, product management, and a secure payment gateway.",
    image: "/projects/geritch.PNG",
    link: "https://gericht-jerry.netlify.app/",
    name: "GERICHT JERRY",
    techStack: [
      <NextJSIcon key={0} />,
      <Tailwind key={1} />,

      <Zustand key={3} />,
    ],
  },
  {
    title: "AI Note-taking Website",
    description:
      "A full-featured AI note-taking website built with React and Node.js, featuring user authentication, note management, and a secure payment gateway.",
    image: "/projects/noteflow.PNG",
    link: "https://ainoteflow.netlify.app/",
    name: "AINOTEFLOW",
    techStack: [
      <NextJSIcon key={0} />,
      <Tailwind key={1} />,
      <ReactIcon key={2} />,
      <Redux key={3} />,
    ],
  },
];

export const details = [
  { id: 1, name: "About", component: <About /> },
  {
    id: 2,
    name: "Resume",
    component: <Resume />,
  },
  {
    id: 3,
    name: "Projects",
    component: <Projects />,
  },
  {
    id: 4,
    name: "Blog",
    component: <Blog />,
  },
  {
    id: 5,
    name: "Contact",
    component: <Contact />,
  },
];
