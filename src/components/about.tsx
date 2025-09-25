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
        <CardTitle className="text-4xl -mt-15 hidden lg:block">About</CardTitle>
        <div className="bg-amber-400 w-10 h-2 rounded-2xl hidden lg:block"></div>
        <CardDescription className="my-5 text-left">
          I am Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. My job is to
          build your website so that it is functional and user-friendly but at
          the same time attractive. Moreover, I add personal touch to your
          product and make sure that is eye-catching and easy to use. My aim is
          to bring across your message and identity in the most creative way. I
          created web design for many famous brand companies.
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
      <CardContent className="flex gap-5 justify-between my-5 text-left">
        {clients.map((item, index) => (
          <Image
            src={item}
            alt={`Client ${index + 1}`}
            width={100}
            height={50}
            key={index}
          />
        ))}
      </CardContent>
    </div>
  );
};

export default About;
