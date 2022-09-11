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
    return <div>Loading</div>
  }
  console.log(book);
  return (
    <div>
      <h2 className="text-4xl font-bold">Book</h2>
    </div>
  );
};

export default Book;
