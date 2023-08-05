import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#fbf0e4] xl:container mx-auto flex items-center justify-between px-24">
      <div className="">
        <h3 className="text-[#003d2a] font-bold text-5xl">
          Grab Upto 50% Off On <br />
          Selected Headphone
        </h3>
        <button className="bg-[#003d2a] px-6 py-2 rounded-3xl text-white font-bold mt-8">Buy Now</button>
      </div>
      <img
        src="https://d1sfco99flnudn.cloudfront.net/go.frontier.com/images/partials/split-content/girl-laptop-headphones.png"
        alt=""
        className="w-1/3"
      />
    </div>
  );
};

export default Banner;
