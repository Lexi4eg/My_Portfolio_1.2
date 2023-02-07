/* eslint-disable react-hooks/rules-of-hooks */
//import { Head } from "next/document";
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Head from "next/head";

function contactme() {
  const [name, setName] = useState("");
  const [emailsender, setemailsender] = useState("");
  const email = "felix.prattes@gmail.com";
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setStatus(null);
    try {
      await axios.post("/api/send-email", {
        name,
        email,
        message,
        emailsender,
      });

      setStatus("Email sent successfully");
    } catch (err) {
      console.error(err);
      setStatus("Error sending email");
    }
  };
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-slate-800">
        <Navbar />
        <div>
          <div className=" text-center text-5xl pt-20 pb-4">Contact me</div>
          <div className="flex flex-col justify-center items-center  ">
            <form onSubmit={handleSubmit} className="flex flex-col w-72 ">
              <input
                placeholder="Your Name"
                type="text"
                className="rounded-md m-2 p-1"
                name="name"
                id="rollNumber"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your Email"
                className="rounded-md m-2 p-1"
                name="Email"
                value={emailsender}
                id="name"
                onChange={(e) => setemailsender(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Your Message"
                name="Your Message"
                className="rounded-md m-2 p-1 pb-20"
                id="name"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-center">
                <div className="flex justify-center w-32 rounded-md bg-slate-800 border-2 ">
                  <button
                    type="submit"
                    className="  text-xl p-1 text-center text-white w-20"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default contactme;
