import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";

const Book = (): JSX.Element => {
  const { id } = useParams() as any;
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
  const {
    data: book,
    isLoading,
    refetch,
  } = useQuery(["book"], () =>
    fetch(`http://localhost:5000/book/${id}`, {
      headers: {
        Authorization: `${email} ${accessToken}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(book);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center">Book Details:</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
