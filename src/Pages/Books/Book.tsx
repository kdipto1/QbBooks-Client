import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router";
import auth from "../../firebase.init";
import AddToCart from "../Cart/AddToCart";

const Book = (): JSX.Element => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams() as any;
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
  const {
    data: book,
    isLoading,
    refetch,
  } = useQuery(["book"], () =>
    fetch(`https://qbbooks.onrender.com/book/${id}`, {
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
    <div className="container mx-auto mt-6">
      <h2 className="text-4xl font-bold text-center">Book Details</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-2" src={book?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">Book Name: {book?.name}</h2>
          <h2 className="card-title ">Author: {book?.author}</h2>
          <h2 className="card-title ">Category: {book?.category}</h2>
          <h2 className="card-title ">Price: {book?.price}$</h2>
          <p>Description: {book?.description}</p>
          <div className="card-actions justify-end">
            <AddToCart user={user?.email} book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
