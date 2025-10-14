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
    <Card className="overflow-hidden text-left p-0 border-2 border-gray-300 dark:border-gray-700 justify-center place-self-center  -ml-6 xl:ml-100 max-w-[820px] top-80">
      <span className="xl:justify-end top-0 py-2 xl:p-5 flex shadow-none xl:gap-5 font-bold rounded-b-xl">
        {details.map((tab) => (
          <p
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="text-sm p-auto z-20 hover:cursor-pointer m-auto hover:text-gray-500 data-[state=active]:text-amber-400 data-[state=active]:underline-amber-400"
          >
            {tab.name}
          </p>
        ))}
      </span>
      {activeComponent || <div>Select a tab to view content.</div>}
    </Card>
  );
};

export default DetailCard;
