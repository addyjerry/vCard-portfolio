import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { personal } from "@/constants/siteConfig";
import { Github, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";

const PersonalCard = () => {
  return (
    <Card className="top-20 fixed p-5 border-2 border-gray-300 dark:border-gray-700 shadow-lg text-center justify-center max-w-[350px]">
      <CardHeader>
        <Image
          src="/my-avatar.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="place-self-center"
        />
        <CardTitle>Jerry Bishop Addy</CardTitle>
        <div className="flex flex-col items-center">
          <span className="text-sm bg-gray-500 dark:text-gray-400 text-center rounded-md px-2 py-1 ">
            Web Developer
          </span>
          <div className="flex gap-3 mt-2 text-center justify-center items-center">
            <Link href="https://github.com/addyjerry">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/jerry-addy-193437249/">
              <Linkedin />
            </Link>
            <Link href="https://x.com/JayCodes27">
              <X />
            </Link>
            <Link href="https://www.youtube.com/c/addyjerry">
              <Youtube />
            </Link>
          </div>
        </div>
      </CardHeader>

      <CardContent className="text-left mt-5 justify-center m-auto">
        <div className="flex gap-2 m-5 ">
          <Card className="p-3">{personal.email.icon}</Card>

          <div>
            <h2 className="text-gray-500">{personal.email.title}</h2>
            <p className="max-w-xl">{personal.email.link}</p>
          </div>
        </div>
        <div className="flex gap-2 m-5">
          <Card className="p-3">{personal.phone.icon}</Card>

          <div>
            <h2 className="text-gray-500">{personal.phone.title}</h2>
            <p className="max-w-xl">{personal.phone.link}</p>
          </div>
        </div>
        <div className="flex gap-2 m-5">
          <Card className="p-3">{personal.birthday.icon}</Card>

          <div>
            <h2 className="text-gray-500">{personal.birthday.title}</h2>
            <p className="max-w-xl">{personal.birthday.link}</p>
          </div>
        </div>
        <div className="flex gap-2 m-5">
          <Card className="p-3">{personal.location.icon}</Card>

          <div>
            <h2 className="text-gray-500">{personal.location.title}</h2>
            <p className="max-w-xl">{personal.location.link}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalCard;
