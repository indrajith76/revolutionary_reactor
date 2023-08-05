import React, { useEffect, useState } from "react";
import Banner from "../components/Banner"; 
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div> 
      <Banner />
      <div className="xl:container mx-auto flex items-center justify-between my-10">
        <div className="flex gap-5">
          <select name="" id="" className="bg-gray-300 px-2 py-1 rounded-3xl">
            <option value="">Headphone Type</option>
            <option value="">Headphone Type</option>
          </select>
          <select name="" id="" className="bg-gray-300 px-2 py-1 rounded-3xl">
            <option value="">Price</option>
            <option value="">Price</option>
          </select>
          <select name="" id="" className="bg-gray-300 px-2 py-1 rounded-3xl">
            <option value="">Color</option>
            <option value="">Color</option>
          </select>
          <select name="" id="" className="bg-gray-300 px-2 py-1 rounded-3xl">
            <option value="">Material</option>
            <option value="">Material</option>
          </select>
          <select name="" id="" className="bg-gray-300 px-2 py-1 rounded-3xl">
            <option value="">Offer</option>
            <option value="">Offer</option>
          </select>
          <button className="bg-gray-300 px-2 py-1 rounded-3xl">
            All Filters
          </button>
        </div>
        <div>
          <select
            name=""
            id=""
            className="border-2 border-gray-300 px-2 py-1 rounded-3xl"
          >
            <option value="">Sort by</option>
            <option value="">Sort by</option>
            <option value="">Sort by</option>
          </select>
        </div>
      </div>

      <div className="xl:container mx-auto">
        <h4 className="text-3xl font-bold mb-10">Our Products For You!</h4>
        <div className="grid grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
