import React from "react";
import ProductCart from "../components/ProductCart";

const Home = () => {
  return (
    <div className="bg-[#09090B] flex flex-col min-h-screen w-full px-8 py-10">
      <div className="lg:mx-12">
        <div className="text-[white] text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] border relative overflow-hidden mb-[50px] px-[30px] py-[96px] rounded-2xl border-solid border-[rgba(255,255,255,0.05)] linear-gradient(135deg, #18181b 0%, #09090b 100%)  bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_60%),linear-gradient(135deg,#18181b_0%,#09090b_100%)]">
          <h1 className="text-[3.4rem] font-bold">Welcome to ShopNest</h1>
          <p className="text-[20px] mt-[10px] text-[#d4d4d8]">Discover the best products at unbeatable prices.</p>
        </div>
      </div>
      <div className="lg:mx-12">
        <h1 className="text-[34px] font-bold text-white mb-8">
          Featured Products
        </h1>
        <div className="flex flex-wrap gap-6">
          <ProductCart/>
          <ProductCart/>
        </div>
      </div>
    </div>
  );
};

export default Home;
