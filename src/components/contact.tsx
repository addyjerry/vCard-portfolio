import React from "react";
import { CardTitle } from "./ui/card";
import Map from "./map";
import { Textarea } from "./ui/textarea";
import { SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <CardTitle className="text-4xl -mt-15">Contact</CardTitle>
      <div className="bg-amber-400 w-10 h-2 rounded-2xl"></div>
      <Map />
      <h2 className="text-2xl mt-5 font-bold">Contact Form</h2>
      <div>
        <form className="flex flex-col gap-4 my-5">
          <div className="flex flex-row gap-2 w-full justify-between">
            <input
              type="text"
              placeholder="Jerry Bishop"
              className="rounded-xl p-2 [data-active]:border-amber-200 border-2 w-3xl"
            />
            <input
              type="email"
              placeholder="jerry@gmail.com"
              className="rounded-xl p-2 [data-active]:border-amber-200 border-2 w-3xl"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            className="w-full h-45 p-5 text-5xl"
          />
          <button className="relative  rounded-xl text-amber-200 p-3 border-2 max-w-xs left-100 flex flex-row gap-3 text-xl">
            <SendIcon />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
