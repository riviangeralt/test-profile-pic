import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
          rel="stylesheet"
          integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossOrigin="anonymous"
      ></Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
