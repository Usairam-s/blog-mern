import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSucess,
  signInFailure,
} from "../../redux/user/userslice";
//to dispatch above logice we use dispatch
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  //const [loading, setLoading] = useState(null);
  //use state from use slisce using useSelector here
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  //initialize dispatch
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }
    try {
      dispatch(signInStart());
      //setLoading(true);
      //setErrorMessage(null);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        //setLoading(false);
        //return setErrorMessage(data.message);
      }
      //setLoading(false);
      if (response.ok) {
        dispatch(signInSucess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      //setLoading(false);
      //setErrorMessage(error.message);
    }
  };

  return (
    <div
      className="min-h-screen 
  mt-20"
    >
      <div className="px-3 flex max-w-3xl mx-auto flex-col md:flex-row md:items-center lg:items-center gap-6">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
            <div>
              <Label value="Email"></Label>
              <TextInput
                id="email"
                placeholder="Enter email"
                type="email"
                autoComplete="off"
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Password"></Label>
              <TextInput
                id="password"
                placeholder="Enter password"
                type="password"
                autoComplete="off"
                onChange={handleChange}
              ></TextInput>
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="
          submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" /> <span>Loading...</span>
                </>
              ) : (
                "SignIn"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex flex-row text-sm gap-2 mt-3">
            <span>Not have an account?</span>
            <Link className="text-sky-800" to="/sign-up">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
