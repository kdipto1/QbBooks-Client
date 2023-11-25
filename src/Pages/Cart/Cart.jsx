import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Cart = () => {
  const [user, loadingUser] = useAuthState(auth);
  const email = user?.email;
  const {
    data: cartItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userCart"],
    queryFn: () =>
      fetch(`https://qbbooks.onrender.com/userCart?email=${email}`).then(
        (res) => res.json()
      ),
  });

  if (loadingUser || isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    refetch();
    return <div>User not authenticated. Log in to view your cart.</div>;
  }
  console.log(cartItems);
  return (
    <section className="container mx-auto">
      <div>
        {cartItems?.map((item) => (
          <div
            key={item._id}
            className="card lg:card-side bg-base-100 shadow my-4"
          >
            <figure>
              <img className="w-36" src={item?.book.image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Book Name: {item.book.name}</h2>
              <p>Author: {item?.book?.author}</p>
              <p>Price: {item?.book?.price}$</p>
              <p>Stock: {item?.book?.quantity}</p>
              {item.status === "paid" && "Status: Payment completed"}
              <div className="card-actions justify-center">
                {item.status !== "paid" && (
                  <Link
                    className="btn btn-success"
                    to={`/payment/${item?._id}`}
                  >
                    Proceed payment
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
