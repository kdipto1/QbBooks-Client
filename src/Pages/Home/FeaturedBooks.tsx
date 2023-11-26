import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import AddToCart from "../Cart/AddToCart";

const FeaturedBooks = (): JSX.Element => {
  const [user, loading] = useAuthState(auth);
  const { data: books, isLoading } = useQuery({
    queryKey: ["featuredBooks"],
    queryFn: async () =>
      await fetch("https://qbbooks.onrender.com/featuredBooks").then((res) =>
        res.json()
      ),
  });
  if (isLoading || loading) {
    return <div>Loading</div>;
  }

  // console.log(books);
  return (
    <section className="container mx-auto mt-20">
      <h2 className="text-center text-4xl font-bold my-4">Featured Books</h2>
      <div className="mt-10 grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1  gap-4">
        {books?.map((book: any) => (
          <div
            key={book._id}
            className="card card-compact bg-base-100 shadow-xl hover:-translate-x-1 hover:translate-y-1"
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
      <div className="flex items-end justify-center mt-4">
        <Link className="btn btn-primary" to="/allBooks">
          All Books
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBooks;
