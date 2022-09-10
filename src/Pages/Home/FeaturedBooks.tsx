import { useQuery } from "@tanstack/react-query";
import React from "react";

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
    <section className="container mx-auto">
      <h1>Featured books</h1>
      {books?.map((book: any) => (
        <h1 key={book._id}>{book.title}</h1>
      ))}
    </section>
  );
};

export default FeaturedBooks;
