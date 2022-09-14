import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
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
  /* ++++++++++++++++++++++++++++++++++++++++ */

  //  cartItems.map((item:any)=> )
  // const obj = JSON.stringify({cartBookId:cartBookId});
  // console.log(obj);
  // const arr = [1, 2, 3, 4];
  const getBook = async () => {
    const cartBookId = await cartItems?.map((id) => id._id);
    const obj = Object.assign({}, cartBookId);
    const bookData = JSON.stringify(cartBookId);
    console.log(bookData);
    // (`http://localhost:5000/cartBooks?books=${bookData}`, cartBookId)
    await axios
      .get(`http://localhost:5000/cartBooks/${bookData}`, cartBookId)
      .then((response) => {
        const { data } = response;
        // setBook(data);
        console.log(data, "hello");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  getBook();

  /* ++++++++++++++++++++++++++++++++++++++++ */
  return <section className="container mx-auto"></section>;
};

export default Cart;
