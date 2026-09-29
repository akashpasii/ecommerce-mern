import React from "react";

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
          <div className="group md:w-80 h-auto bg-[#18181B] overflow-hidden rounded-2xl border border-transparent transition-all duration-400 ease-out hover:-translate-y-2 hover:border-orange-400/20">
            <img
              src="https://th.bing.com/th/id/OIP.prglHzuW8sDZGNRRgUgEKQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              className="h-60 w-full rounded-t-2xl group-hover:scale-104 object-cover transition-transform duration-500 ease-[ease]"
            />
            <div className="flex flex-col gap-2 text-white p-4">
              <h4 className="text-white text-[20px] overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                Oppo f17
              </h4>
              <p className="text-[#f97316] font-bold text-[20px]">₹18000</p>
              <button className="shadow-[0_4px_14px_#ea580c4d] text-white cursor-pointer inline-block text-[15px] font-semibold text-center transition-all duration-[0.3s] ease-[cubic-bezier(.4,0,0.2,1)] px-6 py-3 rounded-lg border-[none] bg-amber-600 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,88,12,0.5)] hover:brightness-110;">
                View Details
              </button>
            </div>
          </div>
          <div className="group w-80 h-auto bg-[#18181B] overflow-hidden rounded-2xl border border-transparent transition-all duration-400 ease-out hover:-translate-y-2 hover:border-orange-400/20">
            <img
              src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno-12-pro-en/listpage/427-600-silver.png"
              className="h-60 w-full rounded-t-2xl group-hover:scale-104 object-cover transition-transform duration-500 ease-[ease]"
            />
            <div className="flex flex-col gap-2 text-white p-4">
              <h4 className="text-white text-[20px] overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                Oppo f17
              </h4>
              <p className="text-[#f97316] font-bold text-[20px]">₹18000</p>
              <button className="shadow-[0_4px_14px_#ea580c4d] text-white cursor-pointer inline-block text-[15px] font-semibold text-center transition-all duration-[0.3s] ease-[cubic-bezier(.4,0,0.2,1)] px-6 py-3 rounded-lg border-[none] bg-amber-600 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,88,12,0.5)] hover:brightness-110;">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
