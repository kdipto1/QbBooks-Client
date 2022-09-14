import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import AddToCart from "../Cart/AddToCart";


const AllBooks = () => {
  const { category } = useParams() as any;
  console.log(category);
  const [user, loading, error] = useAuthState(auth);
  const { data: books, isLoading } = useQuery(
    ["allBooks"],
    async () =>
      await fetch("http://localhost:5000/allBooks").then((res) => res.json())
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section className="container mx-auto mt-6">
      <h2 className="text-center text-4xl font-bold my-4">
        {category ? `${category} books` : "All Books"}
      </h2>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1  gap-4">
        {books?.map((book: any) => (
          <div
            key={book._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img className="h-44" src={book?.image} alt="Shoes" />
            </figure>
            <div className="card-body font-bold">
              <h2 className="card-title">{book?.name}</h2>
              <h4>Category: {book?.category}</h4>
              <h4>Author: {book?.author}</h4>
              <h4>Price: {book?.price} $</h4>
              <h4>Stock: {book?.quantity}</h4>
              <p className="">Category: {book?.category}</p>
              <div className="card-actions justify-end">
                <AddToCart user={user?.email} book={book} />

                <Link
                  to={`/book/${book._id}`}
                  className="btn btn-sm btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
