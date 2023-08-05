import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="border p-5 rounded-md relative">
      <div className="flex justify-center">
        <img className="h-[200px]" src={product.image} alt="" />
      </div>
      <div className="mt-2">
        <Link to={`/products/${product.id}`} className="font-medium">
          {product.title.slice(0, 30)}...
        </Link>
        <small>{product.description.slice(0, 30)}...</small>
        <div className="flex items-center">
          <div className="flex items-center text-[#07db4e]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <small>(121)</small>
        </div>
      </div>
      <button className="border-2 border-[#003d2a] hover:bg-[#003d2a] text-[#003d2a] hover:text-white text-sm font-bold px-3 py-2 mt-2 rounded-3xl duration-300">
        Add to Cart
      </button>

      <button className="text-red-400 absolute top-3 right-3 text-2xl">
        <AiOutlineHeart />
      </button>
    </div>
  );
};

export default ProductCard;
