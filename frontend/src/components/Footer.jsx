import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#09090B] py-10 px-10 w-full text-white  border-[#1b1b21] border-x-0 border border-b-0">
      <div className="max-w-300 m-auto flex items-center gap-4 justify-between flex-wrap text-sm font-normal text-[#A1A1AA]">
        <div className="">
          <h3 className="text-[#f97316] font-bold text-[18px] mb-[6px]">ShopNest</h3>
          <p>Premium E-Commerce Platfrom.</p>
        </div>
        <div className="flex gap-4.5">
          <p>About Us</p>
          <p>Return Policy</p>
          <p>Disclaimer</p>
        </div>
        <p>© 2026 ShopNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
