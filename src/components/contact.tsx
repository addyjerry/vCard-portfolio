import React from "react";
import { CardTitle } from "./ui/card";
import Map from "./map";
import { Textarea } from "./ui/textarea";
import { SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="px-5  w-full justify-center">
      <h1 className="text-4xl  hidden xl:block font-bold">Contact</h1>
      <div className="bg-amber-400 w-10 h-2 rounded-2xl hidden xl:block"></div>
      <Map />
      <h2 className="text-2xl mt-5 font-bold">Contact Form</h2>
      <div>
        <form className="flex flex-col gap-4 my-5">
          <div className="flex flex-col xl:flex-row gap-5 lg:w-[40vw] justify-between">
            <input
              type="text"
              placeholder="Jerry Bishop"
              className="rounded-xl p-2 data-[state=active]:border-amber-400 border-2 w-full"
            />
            <input
              type="email"
              placeholder="jerry@gmail.com"
              className="rounded-xl p-2 data-[state=active]:border-amber-400 border-2 w-full"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            className="w-full h-45 p-2 text-lg data-[state=active]:border-amber-400"
          />
          <button className="rounded-xl text-amber-200 p-3 border-2 max-w-xs place-self-end flex flex-row gap-3 text-lg">
            <SendIcon />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
