import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="min-h-screen 
  mt-20"
    >
      <div className="px-3 flex max-w-3xl mx-auto flex-col md:flex-row lg:items-center gap-6">
        <div className="flex-1">
          <Link to="/" className="  dark:text-white font-bold text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Usairam
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            This is complete blog web application using MERN Stack Flowbit React
            and much more.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4  ">
            <div>
              <Label value="Username"></Label>
              <TextInput
                id="username"
                placeholder="Enter username"
                type="text"
              ></TextInput>
            </div>
            <div>
              <Label value="Email"></Label>
              <TextInput
                id="email"
                placeholder="Enter email"
                type="email"
              ></TextInput>
            </div>
            <div>
              <Label value="Password"></Label>
              <TextInput
                id="password"
                placeholder="Enter password"
                type="password"
              ></TextInput>
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="
          submit"
            >
              SignUp
            </Button>
          </form>
          <div className="flex flex-row text-sm gap-2 mt-3">
            <span>Have an account?</span>
            <Link className="text-sky-800" to="/sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
