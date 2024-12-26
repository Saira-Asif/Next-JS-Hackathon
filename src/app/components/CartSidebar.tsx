// components/CartSidebar.tsx
import { useState } from "react";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

interface CartSidebarProps {
  cartSidebarOpen: boolean;
  toggleCartSidebar: () => void;
}

export default function CartSidebar({
  cartSidebarOpen,
  toggleCartSidebar,
}: CartSidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg transform duration-300 ${
        cartSidebarOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <button
        className="absolute top-5 right-5"
        onClick={toggleCartSidebar}
      >
        <Image
          src="/icons/cross.png"
          alt="Close Icon"
          width={24}
          height={24}
        />
      </button>
      <div className="flex flex-col items-center justify-center mt-16 text-lg">
        <p className="mb-4">Your Shopping Cart</p>
        <div className="flex flex-col items-center">
          <p>No items in cart</p>
        </div>
      </div>
    </div>
  );
}
