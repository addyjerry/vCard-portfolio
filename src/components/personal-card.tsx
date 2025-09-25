"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { personal } from "@/constants/siteConfig";
import { ArrowBigDown, Github, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";

const PersonalCard = () => {
  const [show, setShow] = useState(false);

  return (
    <Card className="top-20 fixed p-5 border-2 border-gray-300 dark:border-gray-700 shadow-lg text-center justify-center w-full xl:max-w-[350px]  ">
      <CardHeader className="flex flex-row xl:flex-col gap-3 justify-center items-center">
        <Card className="p-2 w-40">
          <Image
            src="/my-avatar.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="place-self-center w-40 hover:animate-bounce"
          />
        </Card>
        <div className="flex flex-col ">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Jerry Addy</h1>
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
        </div>
        <button
          className="animate-bounce xl:hidden place-self-center -mt-35 ml-30 -mr-15 border-1 p-2 rounded-sm "
          onClick={() => setShow(!show)}
        >
          <ArrowBigDown />
        </button>
      </CardHeader>

      {show ? (
        <CardContent className="text-left mt-5 justify-center  xl:hidden ">
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
      ) : (
        <CardContent className="text-left mt-5 justify-center m-auto hidden xl:block">
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
      )}
    </Card>
  );
};

export default PersonalCard;
