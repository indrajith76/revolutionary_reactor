import React from "react";
import { FiPhone, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <section>
      <div className="bg-[#003d2a]">
        <div className="xl:container mx-auto flex items-center justify-between py-2">
          <p className="flex items-center gap-2 text-white">
            <FiPhone /> +001234567890
          </p>
          <p className="text-white">Get 50% off on Selected items | Show Now</p>
          <div>
            <select className="mr-1 bg-[#003d2a] text-white" name="" id="">
              <option value="">Eng</option>
              <option value="">Hindi</option>
            </select>
            <select name="" id="" className=" bg-[#003d2a] text-white">
              <option value="">Location</option>
              <option value="">Location</option>
            </select>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="xl:container mx-auto flex items-center justify-between">
          <Link to={"#"}>
            <span className="text-[#003d2a] flex items-center gap-2 text-2xl font-bold">
              <TiShoppingCart />
              Shopcart
            </span>
          </Link>

          <div className="flex flex-row gap-7">
            <select name="" id="">
              <option value="">Categories</option>
              <option value="">Categories</option>
              <option value="">Categories</option>
            </select>
            <Link to="">Deals</Link>
            <Link to="">What's New</Link>
            <Link to="">Delivery</Link>
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Product"
              className="border rounded-md pl-3 pr-10"
            />
            <span className="absolute top-[4px] right-1">
              <FiSearch className="text-gray-400" />
            </span>
          </div>

          <div className="flex items-center gap-7">
            <Link className="flex items-center gap-2">
              <FiUser /> Account
            </Link>
            <Link className="flex items-center gap-2">
              <FiShoppingCart /> Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
