import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Info from "../components/Info";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Info/>
      <Category />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
