import React from "react";
import Gallery from "../components/Gallery"; // component that shows gallery items
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="mt-20">
          <Gallery />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GalleryPage;
