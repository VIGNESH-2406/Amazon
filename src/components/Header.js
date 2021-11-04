import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroIcons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p=1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          {/* no matter what file type you give Image tag of 
          next will turn into web.p format */}
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search part */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md 
          flex-grow cursor-pointer
        bg-yellow-400  hover:bg-yellow-300"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink
             rounded-l-md focus:outline-none" /* focus:outline-none */
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="cursor-pointer link">
            <p>hello</p>
            <p className="font-extrabold  md:text-sm ">Account & lists</p>
          </div>
          <div className="link">
            <p>return</p>
            <p className="font-extrabold md:text-sm "> & orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex  items-center"
          >
            <span className="absolute top-0 r-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden  md:inline font-extrabold md:text-sm  mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 pl-6 p-2 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> all{" "}
        </p>
        <p className="link">prime video </p>
        <p className="link">Amazon Business </p>
        <p className="link"> Todays Deals </p>
        <p className="link hidden lg:inline-flex"> Electronics </p>
        <p className="link hidden lg:inline-flex"> Food & Grocery </p>
        <p className="link hidden lg:inline-flex"> Prime </p>
        <p className="link hidden lg:inline-flex"> Buy Again </p>
        <p className="link hidden lg:inline-flex"> Shopper Toolkit </p>
        <p className="link hidden lg:inline-flex"> Health & Personal care </p>
      </div>
    </header>
  );
}

export default Header;
