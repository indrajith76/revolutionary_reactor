import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
  const { title, description, image, price, rating } = useLoaderData();
  const [count, setCount] = useState(1);

  console.log(count);

  return (
    <div className="xl:container mx-auto flex justify-between gap-10 mt-10 px-10">
      <img className="w-[35%] border px-20 py-10" src={image} alt="" />
      <div>
        <div>
          <h4 className="text-2xl font-medium text-gray-800 mb-5">{title}</h4>
          <small>{description}</small>
          <div className="flex items-center text-[#07db4e] my-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-black">({rating.count})</p>
          </div>
          <p className="text-2xl font-medium">Price: ${price * count}</p>
        </div>
        <div className="bg-gray-200 inline-block rounded-md my-5">
          <button
            onClick={() => (count == 1 ? setCount(1) : setCount(count - 1))}
            className="px-5 py-1 rounded font-bold text-black"
          >
            -
          </button>
          <input
            type="text"
            disabled
            value={count}
            className="border w-6 text-center mx-2 rounded text-lg font-medium"
          />
          <button
            onClick={() => setCount(count + 1)}
            className="px-5 py-1 rounded font-bold text-black"
          >
            +
          </button>
        </div>
        <div className="flex gap-3">
          <button className="border bg-[#003d2a] text-xl px-6 py-2 rounded-3xl font-semibold text-white">Buy Now</button>
          <button className="border-2 text-[#003d2a] border-[#003d2a] text-xl px-6 py-2 rounded-3xl font-semibold">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
