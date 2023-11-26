import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L0gtQCleCCJSf6N0qVeujBBIvuXiFVg1yxwXQdrOAXXpdKUo162kw118PF7rvgnWE49F14H702XyEkS3qYBYoSD004hIsjWXd"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://qbbooks.onrender.com/userCart/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ordering", id],
    queryFn: async () =>
      await fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section className="container mx-auto">
      <div className="card w-50 max-w-md bg-base-100 shadow my-12 mx-auto">
        <div className="card-body">
          <h2 className="card-title font-bold text-success mx-auto">
            Order Details
          </h2>
          <p>Product name: {order?.book.name}</p>
          {/* <p>Order quantity: {order?.orderQuantity}</p> */}
          <p>Price: {order?.book.price} (usd)</p>
          <div className="divider"></div>
          <div className="mt-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm
                refetch={refetch}
                price={order?.book.price}
                order={order}
              />
            </Elements>
          </div>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md bg-base-100 mx-auto">
        <div className="card-body">{/* element */}</div>
      </div>
    </section>
  );
};

export default Payment;
