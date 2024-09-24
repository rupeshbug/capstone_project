"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, ChartNoAxesCombined } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target) && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative py-5 px-5 md:px-32 text-gray-800 flex justify-between items-center">
      <div className="w-[30%] flex gap-1 cursor-pointer">
        <Link href="/">
          <h1 className="text-3xl tracking-wider">Intextify</h1>
        </Link>
        <span>
          <ChartNoAxesCombined size={32} color="#0d9488" />
        </span>
      </div>
      <div className="hidden xl:flex w-[40%] space-x-24 text-[18px]">
        <Link className="hover:text-teal-600" href="/">
          Home
        </Link>
        <Link className="hover:text-teal-600" href="/about">
          About
        </Link>
        <Link className="hover:text-teal-600" href="/features">
          Features
        </Link>
      </div>
      <div className="hidden lg:flex w-[20%] space-x-16 text-[18px]">
        <Link
          className="border-2 py-2 px-6 border-teal-500 rounded-2xl hover:bg-teal-500 hover:text-white"
          href="/"
        >
          Login
        </Link>
        <div className="flex gap-2 items-center border-2 py-2 px-6 border-teal-500 rounded-2xl hover:bg-teal-500 hover:text-white">
          <Rocket size={20} color="#933a34" />
          <Link href="/">Signup</Link>
        </div>
      </div>
      <button className="xl:hidden text-gray-800" onClick={toggleMenu}>
        <Menu size={32} />
      </button>
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 opacity-30 z-40" />
          <div
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-3/4 lg:w-2/4 bg-gray-800 p-6 z-50 opacity-95 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <button
              className="text-white absolute top-4 right-4"
              onClick={closeMenu}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col mt-16 space-y-8 text-center">
              <Link href="/" className="text-white text-xl" onClick={closeMenu}>
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-xl"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-white text-xl"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link
                href="/"
                className="border-2 border-teal-500 text-xl w-[80%] mx-auto py-2 px-6 rounded-2xl text-white hover:bg-teal-500 hover:text-white"
                onClick={closeMenu}
              >
                Login
              </Link>
              <div className="flex gap-2 items-center justify-center mx-auto w-[80%] border-2 py-2 px-6 border-teal-500 rounded-2xl text-teal-500 hover:bg-teal-500 hover:text-white">
                <Rocket size={20} color="#933a34" />
                <Link
                  href="/"
                  className="text-white text-xl"
                  onClick={closeMenu}
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
