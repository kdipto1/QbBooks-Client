import React from "react";
import history from "../../Images/Icons/history.svg";
import engineering from "../../Images/Icons/engineering.svg";
import programming from "../../Images/Icons/programming.svg";
import science from "../../Images/Icons/science.svg";
const TopCategories = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center ">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {/*  */}
        <button className="card mx-auto w-60 hover:-translate-x-1 hover:translate-y-1 hover:animate-pulse  shadow-xl image-full">
          <figure>
            <img className="p-2 bg-slate-600" src={engineering} alt="Shoes" />
          </figure>
          <div className="card-body flex items-center justify-center my-auto text-center">
            <h2 className="card-title  font-bold text-2xl">Engineering</h2>
            <p className="">
              Engineering is the application of science and maths to solve
              problems.
            </p>
          </div>
        </button>
        {/*  */}
        {/*  */}
        <button className="card w-60  shadow-xl image-full mx-auto">
          <figure>
            <img className="p-2 bg-slate-600" src={programming} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title font-bold text-2xl">Programming</h2>
            <p className="">
              Engineering is the application of science and maths to solve
              problems.
            </p>
          </div>
        </button>
        {/*  */}
        {/*  */}
        <button className="card w-60  shadow-xl image-full mx-auto">
          <figure>
            <img className="p-2 bg-slate-600" src={science} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title font-bold text-2xl">Science</h2>
            <p className="">
              Engineering is the application of science and maths to solve
              problems.
            </p>
          </div>
        </button>
        {/*  */}
        {/*  */}
        <button className="card w-60  shadow-xl image-full mx-auto text-primary">
          <figure>
            <img className="p-2 bg-slate-600" src={history} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title  font-bold text-2xl">History</h2>
            <p className=" text-primary">
              Engineering is the application of science and maths to solve
              problems.
            </p>
          </div>
        </button>
        {/*  */}
      </div>
    </section>
  );
};

export default TopCategories;
