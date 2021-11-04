//always need to whitelist the domains for the images in next to confugure
module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
