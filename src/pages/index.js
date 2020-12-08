import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShortAbout from "../components/ShortAbout";
import FeaturedWorks from "../components/FeaturedWorks";
import ProjectInMind from "../components/ProjectInMind";
import Footer from "../components/Footer";

// import Donut from "../components/Donut";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cruz Burgos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div style={{ margin: "0 10% 0 10%" }}>
        <Hero />
        <ShortAbout />
        <FeaturedWorks />
        <ProjectInMind />
      </div>
      <Footer />
    </>
  );
}
