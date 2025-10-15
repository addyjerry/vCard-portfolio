import React from "react";

const Blog = () => {
  return (
    <div className="w-full p-3 ">
      <h2 className="text-4xl hidden xl:block font-bold">Blog</h2>
      <div className="bg-amber-400 w-10 h-2 rounded-2xl my-10 hidden xl:block"></div>
      <main className="w-full h-screen justify-center p-5">
        <p className="justify-center text-3xl lg:text-6xl font-extrabold text-center mt-50 lg:p-14">
          Blog is Coming soon...
        </p>
      </main>
    </div>
  );
};

export default Blog;
