import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import AddToCart from "../Cart/AddToCart";
import Loading from "../../components/ui/Loading";

const CategoryBooks = () => {
  const { category } = useParams<{ category: string }>();
  const [user, loadingUser, errorUser] = useAuthState(auth);

  const {
    data: books,
    isLoading: isLoadingBooks,
    isError: errorBooks,
  } = useQuery<any, Error>({
    queryKey: ["categoryBooks", category],
    queryFn: async () => {
      const response = await fetch(
        `https://qbbooks.onrender.com/category?category=${category}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      return response.json();
    },
  });

  if (isLoadingBooks || loadingUser) {
    return <Loading />;
  }

  if (errorBooks || errorUser) {
    return <div>Error loading books</div>;
  }

  return (
    <section className="container mx-auto mt-6 min-h-screen">
      <h2 className="text-center text-4xl font-bold my-4">
        {category ? `${category} books` : "All Books"}
      </h2>

      {books && books.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {books.map((book: any) => (
            <div
              key={book._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img className="h-44" src={book?.image} alt="Book cover" />
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
      ) : (
        <p>No books available in this category.</p>
      )}
    </section>
  );
};

export default CategoryBooks;
