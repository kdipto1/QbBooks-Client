import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

const CheckoutForm = (order: any) => {
  console.log(order?.order.book.price);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  // const { _id, quantity, name, product, address, book?.price, status, email } =
  //   order;
  const _id = order?.order._id;
  const totalPrice = order?.order.book.price;
  const email = order?.email;

  useEffect(() => {
    fetch(
      `https://qbbooks.onrender.com/create-payment-intent?totalPrice=${totalPrice}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: name,
            email: email,
          },
        },
      });
    if (intentError && intentError?.message) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      // console.log(paymentIntent?.id);
      // setTransactionId(paymentIntent?.id);
      paymentIntent && setTransactionId(paymentIntent.id);
      setSuccess("congrats, your payment is completed");
      // store payment info in database
      const payment = {
        order: _id,
        transactionId: paymentIntent?.id,
      };
      fetch(`https://qbbooks.onrender.com/userCart/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            className="btn btn-success btn-sm mt-4 "
            type="submit"
            disabled={!stripe || !clientSecret || success ? true : false}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <div className="text-green-600">
          <p>{success}</p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-600 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default CheckoutForm;
