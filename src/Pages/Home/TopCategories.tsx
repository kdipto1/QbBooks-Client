import React from "react";
import history from "../../Images/Icons/history.svg";
import engineering from "../../Images/Icons/engineering.svg";
import programming from "../../Images/Icons/programming.svg";
import science from "../../Images/Icons/science.svg";
const TopCategories = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center">Top Categories</h2>
      {/*  */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          // style={{ backgroundImage: `${science}` }}
          // style="background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            Category name
          </h3>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default TopCategories;
