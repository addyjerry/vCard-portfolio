"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";

import { Tabs } from "./ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import About from "./about";
import Resume from "./resume";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";
import { details } from "@/constants/siteConfig";

const DetailCard = () => {
  const [activeTab, setActiveTab] = useState(details[0]?.id);

  const activeComponent = details.find(
    (tab) => activeTab === tab.id
  )?.component;
  return (
    <div className="xl:ml-100 text-leftshadow-xl border-1 rounded-xl border-gray-300 dark:border-gray-700 justify-center place-self-center w-full max-w-[820px] ">
      <span className="py-2 xl:p-5 flex shadow-none xl:gap-5 font-bold ">
        {details.map((tab) => (
          <p
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="text-sm justify-between z-20 hover:cursor-pointer m-auto hover:text-gray-500 data-[state=active]:text-amber-400 data-[state=active]:underline-amber-400"
          >
            {tab.name}
          </p>
        ))}
      </span>
      {activeComponent || <div>Select a tab to view content.</div>}
    </div>
  );
};

export default DetailCard;
