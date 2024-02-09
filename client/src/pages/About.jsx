import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-4">
            About Usairam's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Usairam's Blog! This blog was created by Usairam Saleem
              as a personal project to share with the Employers. Usairam is a
              passionate developer who loves to write code and build website
              development projects.
            </p>

            <p>
              During developing this blog I user mainly MERN Stack. A powerful
              combination of technologies to create fast, robust and scalable
              web application. I used Tailwind CSS and React Flowbite (powerfull
              Recat components library but good thing is fully customizable
              using tailwind css) so we can use as our needs and requirements.
            </p>

            {/* <p>
              I encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
