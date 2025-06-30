import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/marbles.json";
import Category from "../components/Category";

function Products() {

  const categoryRef = useRef(null);

  return (
    <>
      <Header />
      <Category categoryRef={categoryRef} />
      <Footer />
    </>
  );
}

export default Products;
