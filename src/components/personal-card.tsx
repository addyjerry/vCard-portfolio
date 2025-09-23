import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { personal } from "@/constants/siteConfig";
import Earthanimation from "@/display/Earthanimation";

const PersonalCard = () => {
  return (
    <div className="m-auto place-content-center flex items-center flex-row  mx-auto px-4 md:px-8 lg:px-16 z-10 max-w-[1800px]">
      <Card className="p-5 border-2 border-gray-300 dark:border-gray-700 shadow-lg text-center justify-center">
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
            <Earthanimation />
          </div>
        </CardHeader>

        <CardContent className="text-left mt-5">
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
    </div>
  );
};

export default PersonalCard;
