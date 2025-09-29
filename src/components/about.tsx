import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { about, clients, testimonials } from "@/constants/siteConfig";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle className="text-4xl -mt-15 hidden xl:block">About</CardTitle>
        <div className="bg-amber-400 w-10 h-2 rounded-2xl hidden xl:block"></div>
        <CardDescription className="my-5 text-left">
          I am a Frontend Developer based in Accra, Ghana, passionate about
          building modern, responsive web applications. I specialize in
          translating design concepts into interactive user experiences using
          the latest technologies. My focus is on writing clean, maintainable
          code and crafting interfaces that are both functional and visually
          appealing. I enjoy solving complex problems and turning ideas into
          seamless digital products. My goal is to deliver websites and apps
          that are fast, accessible, and user-friendly, helping brands connect
          with their audience in meaningful ways.
        </CardDescription>
      </CardHeader>
      <CardTitle className="ml-5 text-2xl">What I do</CardTitle>
      <CardContent className="flex flex-wrap gap-5 justify-start my-5 text-left">
        {about.map((item) => (
          <Card className="flex flex-row max-w-88 p-5" key={item.title}>
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        ))}
      </CardContent>
      {/* testimonial section */}
      <CardTitle className="text-2xl">Testimonials</CardTitle>
      <CardContent className="flex flex-wrap gap-5 justify-between my-5 text-left">
        {testimonials.map((item) => (
          <Card className=" max-w-85 p-5 my-5" key={item.name}>
            <div className="flex flex-row">
              <Card className="p-1 mr-3 -mt-10 ">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                />
              </Card>
              <CardTitle>{item.name}</CardTitle>
            </div>
            <div>
              <CardDescription>{item.feedback}</CardDescription>
              <CardDescription>Rating: {item.rating} / 5</CardDescription>
            </div>
          </Card>
        ))}
      </CardContent>
      {/* clients section */}
      <CardTitle className="text-2xl">Clients</CardTitle>
      <CardContent className="flex gap-2 xl:gap-5 justify-between my-5 text-left">
        {clients.map((item, index) => (
          <Image
            src={item}
            alt={`Client ${index + 1}`}
            width={100}
            height={100}
            key={index}
            className="size-10 xl:size-auto"
          />
        ))}
      </CardContent>
    </div>
  );
};

export default About;
