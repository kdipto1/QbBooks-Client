import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AddToCart = (props: any): JSX.Element => {
  const addToCart = async (): Promise<void> => {
    // console.log(props);
    // console.log(props?.book?._id, props?.user);
    // console.log(props?.user);
    const cartItem = {
      bookId: props?.book?._id,
      email: props?.user,
    };
    const url = `http://localhost:5000/cart`;
    await axios
      .post(url, cartItem)
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          toast.success("Added to cart");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <button onClick={addToCart} className="btn btn-sm btn-warning">
      Add to cart
    </button>
  );
};

export default AddToCart;
