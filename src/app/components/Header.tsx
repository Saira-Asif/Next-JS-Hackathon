"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      enablePageScroll();
    } else {
      setMenuOpen(true);
      disablePageScroll();
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    enablePageScroll();
  };

  return (
    <header
      className={`${
        isHomePage ? "bg-[#FBEBB5]" : "bg-white"
      } w-full fixed top-0 left-0 z-50`}
    >

      {/* Top Bar */}
      <div className="flex justify-between items-center w-full h-[6.25rem] max-w-[90rem] px-4 sm:px-8 lg:px-16 mx-auto">
     
      <div className="lg:pl-[10rem] hidden lg:block"></div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-x-[75px]">
          <Link href="/" className="hover:text-cyan-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-cyan-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-cyan-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-cyan-600">
            Contact
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-x-10">
          <Image
            src="/icons/account-alert-outline.png"
            alt="Account Alert"
            width={28}
            height={28}
          />
          <Image src="/icons/search.png" alt="Search Icon" width={28} height={28} />
          <Image src="/icons/heart.png" alt="Heart Icon" width={28} height={28} />
          <Image
            src="/icons/shopping-cart-outlined.png"
            alt="Shopping Cart"
            width={28}
            height={28}
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden flex items-center ml-auto"
          onClick={toggleMenu}
        >
          <Image
            src="/icons/hamburgerMenu.png"
            alt="Menu Icon"
            width={28}
            height={28}
          
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${isHomePage ? "bg-[#FBEBB5]" : "bg-white"} z-40`}
      >
        <button
          className="absolute top-5 right-5"
          onClick={handleMenuClose}
        >
          <Image
            src="/icons/cross.png"
            alt="Close Icon"
            width={24}
            height={24}
          />
        </button>
        <nav className="flex flex-col items-center justify-center gap-8 mt-16 text-lg">
          <Link href="/" onClick={handleMenuClose} className="hover:text-cyan-600"  >
            Home
          </Link>
          <Link href="/shop" onClick={handleMenuClose} className= "hover:text-cyan-600">
            Shop
          </Link>
          <Link href="/about" onClick={handleMenuClose}  className="hover:text-cyan-600">
            About
          </Link>
          <Link href="/contact" onClick={handleMenuClose} className="hover:text-cyan-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Image
            src="/icons/account-alert-outline.png"
            alt="Account Alert"
            width={28}
            height={28}
          />
          <Image
            src="/icons/search.png"
            alt="Search Icon"
            width={28}
            height={28}
          />
          <Image src="/icons/heart.png" alt="Heart Icon" width={28} height={28} />
          <Image
            src="/icons/shopping-cart-outlined.png"
            alt="Shopping Cart"
            width={28}
            height={28}
          />
        </div>
      </div>
    </header>
  );
}
