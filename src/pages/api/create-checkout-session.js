const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items } = req.body;
  //   console.log(items);

  // implicit return function \\   \\ stripe expects to transform the data or items to be recieved in certain form  and we return that in   a object
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: items.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  //heres the items now create a session

  const session = await stripe.checkout.session.create({
    payment_method_types: ["cards"],
    shipping_rates: [""],
    shipping_address_collection: { allowed_countries: ["GB", "US", "CA"] },
    line_items: transformedItems,
    mode: "payment",

    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
};
