import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Cart = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  const { data: cartItems, isLoading } = useQuery(
    ["userCart"],
    async () =>
      await fetch(`http://localhost:5000/userCart?email=${email}`).then((res) =>
        res.json()
      )
  );
  if (isLoading || loading) {
    return <div>Loading</div>;
  }
  console.log(cartItems);

  return (
    <section className="container mx-auto">
      {cartItems.map((item: any) => (
        <div className="card card-side bg-base-100 shadow-xl my-2 ">
          <figure>
            <img className="w-44" src={item?.book?.image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.book?.name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
