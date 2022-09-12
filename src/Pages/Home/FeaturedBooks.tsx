import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import AddToCart from "../Cart/AddToCart";



const FeaturedBooks = (): JSX.Element => {
  const [user, loading, error] = useAuthState(auth);
  const { data: books, isLoading } = useQuery(
    ["featuredBooks"],
    async () =>
      await fetch("http://localhost:5000/featuredBooks").then((res) =>
        res.json()
      )
  );
  if (isLoading || loading) {
    return <div>Loading</div>;
  }
  // console.log(books);
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-center text-4xl font-bold my-4">Featured Books</h2>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1  gap-4">
        {books?.map((book: any) => (
          <div
            key={book._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img className="h-44" src={book?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book?.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
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

export default FeaturedBooks;
