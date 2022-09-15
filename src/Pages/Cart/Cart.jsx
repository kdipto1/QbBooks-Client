import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Cart = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  const { data: cartItems, isLoading } = useQuery(
    ["userCart"],
    async () =>
      await fetch(`https://qbbooks.onrender.com/userCart?email=${email}`).then(
        (res) => res.json()
      )
  );
  if (isLoading || loading) {
    return <div>Loading</div>;
  }
  console.log(cartItems?.status);
  /* ++++++++++++++++++++++++++++++++++++++++ */
  //  cartItems.map((item:any)=> )
  // const obj = JSON.stringify({cartBookId:cartBookId});
  // console.log(obj);
  // const arr = [1, 2, 3, 4];
  // const getBook = async () => {
  //   const cartBookId = await cartItems?.map((id) => id._id);
  //   const obj = Object.assign({}, cartBookId);
  //   const bookData = JSON.stringify(cartBookId);
  //   console.log(bookData);
  //   // (`https://qbbooks.onrender.com/cartBooks?books=${bookData}`, cartBookId)
  //   await axios
  //     .get(`https://qbbooks.onrender.com/cartBooks/${bookData}`, cartBookId)
  //     .then((response) => {
  //       const { data } = response;
  //       // setBook(data);
  //       console.log(data, "hello");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // getBook();
  /* ++++++++++++++++++++++++++++++++++++++++ */
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
