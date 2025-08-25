import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const gallery = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Gallery />
      </div>

      <Footer />
    </>
  );
};

export default gallery;
