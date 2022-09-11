import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const FeaturedBooks = (): JSX.Element => {
  const { data: books, isLoading } = useQuery(
    ["featuredBooks"],
    async () =>
      await fetch("http://localhost:5000/featuredBooks").then((res) =>
        res.json()
      )
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(books);
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
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book?.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                {/* <Link
                  to={`/book/${book._id}`}
                  className="btn btn-sm btn-primary"
                >
                  Add to cart
                </Link> */}
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
