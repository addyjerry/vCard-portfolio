import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import { projects } from "@/constants/siteConfig";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mx-5">
      <CardTitle className="text-4xl hidden xl:block">Projects</CardTitle>
      <div className="bg-amber-400 w-10 h-2 rounded-2xl my-10 hidden xl:block"></div>
      {/* <CardDescription className="my-5 text-left">
        I am Creative Director and UI/UX Designer from Sydney, Australia,
        working in web development and print media. I enjoy turning complex
        problems into simple, beautiful and intuitive designs. My job is to
        build your website so that it is functional and user-friendly but at the
        same time attractive. Moreover, I add personal touch to your product and
        make sure that is eye-catching and easy to use. My aim is to bring
        across your message and identity in the most creative way. I created web
        design for many famous brand companies.
      </CardDescription> */}
      <div className="flex flex-wrap gap-6 justify-center my-5 text-left">
        {projects.map((project, index) => (
          <Card key={index} className="my-5 p-2 max-w-xs">
            <Link href={project.link}>
              <Image
                className="rounded-lg"
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
              />
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <div className="flex gap-3 p-3">{project.techStack}</div>
              <CardDescription>{project.description}</CardDescription>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
