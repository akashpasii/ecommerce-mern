import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItem);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="py-[22px] px-12 sticky z-[100] top-0 shadow-[0_4px_30px_#00000080] backdrop-blur-md  flex flex-col landscape:flex-row items-center justify-between border-[#1b1b21] border-x-0 border border-t-0 bg-[#09090B]">
      <div>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-white text-[28px] font-bold tracking-[-1px] drop-shadow-[0_2px_10px_#f973164d]"
        >
          <img
            src="https://shopnest-qiiw.onrender.com/ShopNestLogo.png"
            className="h-9 w-9 rounded-lg object-cover drop-shadow-[0_2px_8px_rgba(249,115,22,0.35)]"
          />
          ShopNest
          <div className="w-2.5 h-1.5 rounded-full bg-red-400 relative top-2 left-1"></div>
        </Link>
      </div>
      <ul className="flex gap-7 text-[#a1a1aa] font-medium">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">`Cart ${cartItems.length}`</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">Hi, {user.name}</Link>
            </li>
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
