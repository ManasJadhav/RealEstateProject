import Head from "next/head";
import Image from "next/image";
import Body from "../components/body";
import AboutUs from "../components/about_us";
import Services from "../components/services";
import Sendmail from "../components/sendmail";
import Works from "../components/works";
import Footer from "../components/footer";
import Navnew from "../components/navbar2";
import WhyUS from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="m-0">
      <Navnew />
      
      {/* <Navbar /> */}
      <Body></Body>
      <AboutUs></AboutUs>
      <Services />

      <Works />
      <WhyUS />
      <Testimonials />
      <Sendmail />
      <Footer />
      <Head>
        <title>Key Estate Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-modified.png" />
      </Head>
    </div>
  );
}
