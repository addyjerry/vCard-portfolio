import React from "react";
import { Card } from "./ui/card";

import { Tabs } from "./ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import About from "./about";
import Resume from "./resume";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";

const DetailCard = () => {
  return (
    <Card className="w-6xl overflow-hidden text-left p-5 border-2 border-gray-300 dark:border-gray-700 shadow-lg justify-center place-self-center  ml-100 max-w-[820px]">
      <Tabs>
        <TabsList className="justify-end top-0 p-5 flex shadow-none gap-5 font-bold rounded-b-xl">
          <TabsTrigger
            value="about"
            className="shadow-none bg-none p-auto mx-2 z-20 hover:cursor-pointer hover:text-gray-500 data-[state=active]:text-amber-400 "
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="resume"
            className="shadow-none bg-none p-auto mx-2 z-20 hover:cursor-pointer hover:text-gray-500 data-[state=active]:text-amber-400"
          >
            Resume
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="shadow-none bg-none p-auto mx-2 z-20 hover:cursor-pointer hover:text-gray-500 data-[state=active]:text-amber-400"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="blog"
            className="shadow-none bg-none p-auto mx-2 z-20 hover:cursor-pointer hover:text-gray-500 data-[state=active]:text-amber-400"
          >
            Blog
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="shadow-none bg-none p-auto mx-2 z-20 hover:cursor-pointer hover:text-gray-500 data-[state=active]:text-amber-400"
          >
            Contact
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <About />
        </TabsContent>
        <TabsContent value="resume">
          <Resume />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="blog">
          <Blog />
        </TabsContent>
        <TabsContent value="contact">
          <Contact />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default DetailCard;
