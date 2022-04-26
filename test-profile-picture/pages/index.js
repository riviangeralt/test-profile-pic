import Head from "next/head";
import Banner from "../components/Banner";

import React from "react";
import UploadImg from "../components/UploadImg";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>testprofilepicture</title>
        <meta name="description" content="test your profile picture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <UploadImg />
      <div className="combine_section mt-5 pt-5">
        <Contact />
      </div>
    </>
  );
};

export default Home;
