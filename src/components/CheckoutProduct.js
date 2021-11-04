import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroIcons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //push item to redux
    dispatch(addToBasket(product));
  };
  //remove item from redux
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* middle */}
      <div className="col-span-3 mx-5">
        <p className="font-bold">{title}</p>
        <div className="flex">
          {Array({ rating })
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
        <p>{price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />

            <p className="text-xs text-gray-500">Free Next Delivery</p>
          </div>
        )}
      </div>
      <div className="flex-flex-col space-x-2 my-auto justify-self-end">
        <button className="button " onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
