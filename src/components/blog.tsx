import React from "react";
import { CardTitle } from "./ui/card";

const Blog = () => {
  return (
    <div>
      <CardTitle className="text-4xl -mt-15 hidden lg:block">Blog</CardTitle>
      <div className="bg-amber-400 w-10 h-2 rounded-2xl my-10 hidden lg:block"></div>
      <main className="w-full h-screen justify-center p-5">
        <p className="justify-center text-6xl font-extrabold text-center mt-50">
          Blog is Coming soon...
        </p>
      </main>
    </div>
  );
};

export default Blog;
