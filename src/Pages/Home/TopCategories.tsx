import React from "react";
import history from "../../Images/Icons/history.svg";
import engineering from "../../Images/Icons/engineering.svg";
import programming from "../../Images/Icons/programming.svg";
import science from "../../Images/Icons/science.svg";
import { Link } from "react-router-dom";
const TopCategories = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center ">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {/*  */}
        <Link
          to={`/category/engineering`}
          className="card mx-auto w-60 hover:-translate-x-1 hover:translate-y-1 hover:animate-pulse  shadow-xl image-full"
        >
          <figure>
            <img className="p-2 bg-slate-600" src={engineering} alt="Shoes" />
          </figure>
          <div className="card-body flex items-center justify-center my-auto text-center">
            <h2 className="card-title  font-bold text-2xl">Engineering</h2>
            <p className="">
              Programming is the process of creating a set of instructions that
              tell a computer how to perform a task.
            </p>
          </div>
        </Link>
        {/*  */}
        {/*  */}
        <Link
          to={`/category/programming`}
          className="card w-60  shadow-xl image-full mx-auto hover:-translate-x-1 hover:translate-y-1 hover:animate-pulse"
        >
          <figure>
            <img className="p-2 bg-slate-600" src={programming} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title font-bold text-2xl">Programming</h2>
            <p className="">
              Programming is the process of creating a set of instructions that
              tell a computer how to perform a task.
            </p>
          </div>
        </Link>
        {/*  */}
        {/*  */}
        <Link
          to={`/category/science`}
          className="card w-60  shadow-xl image-full mx-auto hover:-translate-x-1 hover:translate-y-1 hover:animate-pulse"
        >
          <figure>
            <img className="p-2 bg-slate-600" src={science} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title font-bold text-2xl">Science</h2>
            <p className="">
              Science is a systematic enterprise that builds and organizes
              knowledge in the form of testable explanations and predictions
              about the universe.
            </p>
          </div>
        </Link>
        {/*  */}
        {/*  */}
        <Link
          to={`/category/history`}
          className="card w-60  shadow-xl image-full mx-auto text-primary hover:-translate-x-1 hover:translate-y-1 hover:animate-pulse"
        >
          <figure>
            <img className="p-2 bg-slate-600" src={history} alt="Shoes" />
          </figure>
          <div className="card-body  flex items-center justify-center my-auto text-center">
            <h2 className="card-title  font-bold text-2xl">History</h2>
            <p className="">
              History is the study and the documentation of the past.
            </p>
          </div>
        </Link>
        {/*  */}
      </div>
    </section>
  );
};

export default TopCategories;
