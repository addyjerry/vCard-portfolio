import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const DetailCard = () => {
  return (
    <div>
      <Card className="w-6xl p-5 border-2 border-gray-300 dark:border-gray-700 shadow-lg text-center justify-center ml-10">
        <CardHeader>
          <CardTitle>About</CardTitle>

          <CardDescription>
            I am Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs. My job is to
            build your website so that it is functional and user-friendly but at
            the same time attractive. Moreover, I add personal touch to your
            product and make sure that is eye-catching and easy to use. My aim
            is to bring across your message and identity in the most creative
            way. I created web design for many famous brand companies.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DetailCard;
