import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import FeaturedBooks from "./FeaturedBooks";
import Testimonials from "./Testimonials";
import TopCategories from "./TopCategories";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <FeaturedBooks />
      <TopCategories />
      <Testimonials />
      <Contact/>
    </main>
  );
};

export default Home;
