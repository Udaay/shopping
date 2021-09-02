import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publisherKey =
    "pk_test_51JVHUySJr1zV0SDkIdR1BTSjEFYD9gT6WouCiDludGfXzY1ALFud0pWNU0gMPXUSr87PrCs0Y3SrjibPqrKKTTUG00V7LMWvy3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total value is $${price}`}
      amount={price * 100}
      name="Urban Vogue Ltd."
      token={onToken}
      stripeKey={publisherKey}
      shippingAddress
      billingAddress
    />
  );
};

export default StripeCheckoutButton;
