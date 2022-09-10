import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import FeaturedBooks from "./FeaturedBooks";
import TopCategories from "./TopCategories";

const Home = () => {
  return (
    <main className="">
      <h2 className="text-4xl font-bold">This is Home</h2>
      <Banner />
      <FeaturedBooks />
      <TopCategories />
    </main>
  );
};

export default Home;
