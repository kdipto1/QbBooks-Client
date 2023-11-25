import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router";
import auth from "../../firebase.init";

// type LocationProps = {
//   state: {
//     from: Location;
//   };
// };
const AddToCart = (props) => {
  const location = useLocation();
  // const location = useLocation() as unknown as LocationProps;
  const [user, loading, error] = useAuthState(auth);
  const addTo = async () => {
    if (loading) return;
    if (!user) {
      // toast("")
      <Navigate
        toast={toast("Please login to add product to cart")}
        to="/login"
        state={{ from: location }}
        replace
      />;
      return;
    }
    // const toast: any = toast("You need to login to visit this page");
    // console.log(props);
    // console.log(props?.book?._id, props?.user);
    // console.log(props?.user);
    const cartItem = {
      book: props?.book,
      email: props?.user,
    };
    const url = `https://qbbooks.onrender.com/cart`;
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
    <button onClick={() => addTo()} className="btn btn-sm btn-warning">
      Add to cart
    </button>
  );
};

export default AddToCart;
