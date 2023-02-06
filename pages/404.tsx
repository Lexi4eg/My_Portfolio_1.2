import React from "react";
import "../pages/404.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Custom404() {
  return (
    <>
      <div className="errorContainer">
        <Head>
          <title>Work in Progress</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Generated by create next app" />
          <link href="/Logo.svg" rel="shortcut icon" />
        </Head>
        <main>
          <Image
            src="/error.svg"
            className="image"
            width="400"
            height="400"
            alt="404"
          ></Image>

          <h1 className="errormessage">404</h1>
          <p className="errormessage"> Page not found, we are working on it</p>

          <Link href="/">
            <div className="backtohome">Go Back to Home</div>
          </Link>
        </main>
      </div>
    </>
  );
}

export default Custom404;
