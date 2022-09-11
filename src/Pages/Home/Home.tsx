import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import FeaturedBooks from "./FeaturedBooks";
import TopCategories from "./TopCategories";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <FeaturedBooks />
      <TopCategories />
    </main>
  );
};

export default Home;
