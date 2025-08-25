import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Guarantee from "../components/Guarantee";
import InspiCollection from "../components/InspiCollection";
import Bys from "../components/Bys";
import OurGallery from "../components/Gallery";
import Spinner from "../components/Spinner";
import Lookroom from "../components/Lookroom";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Hiwsection from "../components/Hiwsection";

// const InspiCollection = () => lazy(() => import ('../Components/InspiCollection'));

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Guarantee />
      <Suspense fallback={<Spinner />}>
        <InspiCollection />
      </Suspense>

      <Bys />
      <OurGallery />
      <Suspense fallback={<Spinner />}>
        <Hiwsection />
      </Suspense>
      <Lookroom />
      <Footer />
    </div>
  );
};

export default Home;
