import Image from "next/image";
import React from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import axios from "axios";
// const stripePromise = loasdStripe(process.env.stripe_public_key);

function Checkout() {
  const total = useSelector(selectTotal);

  console.log(total);
  const items = useSelector(selectItems);
  console.log(items);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create  a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-sesion", {
      items: items,
      //email:session.user.email
    });

    //REDIRECT USER/CUSTOMER TO STRIPE CHECKOUT

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex  flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-5xl font-extrabold border-b pb-4">
              {items.length === 0
                ? "your Amazon Basket is empty"
                : "Your Shopping basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                rating={item.rating}
                category={item.category}
                image={item.image}
                price={item.price}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}

        <div>
          {items.length > 0 && (
            <>
              <h2>
                subtotal ({items.length}items);
                <span> {total.toFixed(2)}</span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                className="button"
              >
                sign in to checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
