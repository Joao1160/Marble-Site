import Header from "../components/Header";
import Landing from "../components/Landing";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Info from "../components/Info";
import React, { useRef } from "react";


const Home = () => {
  const categoryRef = useRef(null);

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Landing scrollToCategory={scrollToCategory} />
      <Info />
      <Category categoryRef={categoryRef} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
