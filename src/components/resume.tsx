import React from "react";

import { Timeline } from "antd";
import { BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  NextJSIcon,
  ReactIcon,
  ReactNative,
  Redux,
  Sanity,
  Tailwind,
} from "@/icons/icons";
import { Progress } from "./ui/progress";

const Resume: React.FC = () => (
  <div className="m-auto mx-5">
    <CardTitle className="text-4xl -mt-15 hidden xl:block">Resume</CardTitle>
    <div className="bg-amber-400 w-10 h-2 rounded-2xl my-10 hidden xl:block"></div>
    <Timeline
      items={[
        {
          color: "green",
          dot: (
            <Card className="p-2 text-amber-300">
              <BookOpen className="size-4" />
            </Card>
          ),
          children: <h1 className="font-bold text-2xl">Education</h1>,
        },
        {
          color: "blue",
          children: (
            <div className="">
              <h2 className="font-bold text-xl">IPMC</h2>
              <h3 className="font-bold text-xl">Software Engineering</h3>
              <p className="text-gray-500 w-3/4 xl:w-full">
                I studied system analysis, database, programming methods and
                several programming languages including Javascript,PHP,C# ..
              </p>
            </div>
          ),
        },
        {
          color: "blue",
          children: (
            <>
              <h2 className="font-bold text-xl w-3/4">
                Koforidua Senior High Technical School
              </h2>
              <h3 className="font-bold text-xl">General Science</h3>
              <p className="text-gray-500 w-3/4 xl:w-full">
                I studied general science including physics, chemistry, biology,
                mathematics, economics, geography and elective mathematics.
              </p>
            </>
          ),
        },
      ]}
      className="px-10"
    />
    <Timeline
      items={[
        {
          color: "green",
          dot: (
            <Card className="p-2 text-amber-300">
              <BookOpen />
            </Card>
          ),
          children: (
            <h1 className="font-bold text-2xl font-serif ">Experience</h1>
          ),
        },
        {
          color: "blue",
          children: (
            <>
              <h2 className="font-bold text-xl">Frontend Developer</h2>
              <h3 className="font-bold text-xl">CODSOFT (Remote)</h3>
              <p className="text-gray-500 w-3/4 xl:w-full">
                SEPTEMBER -DECEMBER-2024 I was an intern developer who focussed
                on creating basic web projects like portfolio and other static
                web pages.
              </p>
            </>
          ),
        },
        {
          color: "blue",
          children: (
            <>
              <h2 className="font-bold text-xl">Frontend Developer</h2>
              <h3 className="font-bold text-xl">HNG(Remote)</h3>
              <p className="text-gray-500 w-3/4 xl:w-full">
                I worked on various frontend projects, utilizing technologies
                such as React, Next.js, and Tailwind CSS to build responsive
                user interfaces.
              </p>
            </>
          ),
        },
        {
          color: "blue",
          children: (
            <>
              <h2 className="font-bold text-xl">Frontend Developer</h2>
              <h3 className="font-bold text-xl">KDN Technologies(Remote)</h3>
              <p className="text-gray-500 w-3/4 xl:w-full">
                I worked on several projects, including developing and
                maintaining web applications using React and Next.js. I
                collaborated with designers and backend developers to create
                seamless user experiences.
              </p>
            </>
          ),
        },
      ]}
    />
    <div className="my-4">
      <h1 className="font-bold text-xl">TOOLS & LANGUAGES</h1>
      <Card className="xl:p-5 flex flex-row flex-wrap gap-5">
        <div>
          <CardHeader className="flex flex-1">
            <ReactIcon />
            <CardTitle className="xl:text-2xl text-xl font-bold">
              React JS
            </CardTitle>
          </CardHeader>

          <Progress value={90} className="w-3xs xl:w-xs m-2" />
        </div>
        <div>
          <CardHeader className="flex flex-1">
            <NextJSIcon />
            <CardTitle className="text-xl font-bold">Next JS</CardTitle>
          </CardHeader>
          <Progress value={90} className=" w-3xs xl:w-xs m-2" />
        </div>
        <div>
          <CardHeader className="flex flex-1">
            <ReactNative />
            <CardTitle className="text-xl font-bold">React Native</CardTitle>
          </CardHeader>
          <Progress value={75} className="w-3xs xl:w-xs m-2" />
        </div>
        <div>
          <CardHeader className="flex flex-1">
            <Redux />
            <CardTitle className="text-xl font-bold">Redux</CardTitle>
          </CardHeader>
          <Progress value={80} className="w-3xs xl:w-xs m-2" />
        </div>
        <div>
          <CardHeader className="flex flex-1">
            <Tailwind />
            <CardTitle className="text-xl font-bold">Tailwind</CardTitle>
          </CardHeader>
          <Progress value={95} className=" w-3xs xl:w-xs m-2" />
        </div>
        <div>
          <CardHeader className="flex flex-1">
            <Sanity />
            <CardTitle className="text-xl font-bold">Sanity</CardTitle>
          </CardHeader>
          <Progress value={70} className=" w-3xs xl:w-xs m-2 " />
        </div>
      </Card>
    </div>
  </div>
);

export default Resume;
