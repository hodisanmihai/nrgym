"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/photos/logo_nrgym_header.svg"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-[85%] h-[50px] mt-4 flex items-center justify-between relative">
        {/* Left-side links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-black">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pricing">Preturi</a>
          <a href="#program">Program</a>
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[70%] flex items-center justify-center">
          <Image src={logo} alt="Logo" className="w-fit" />
        </div>

        {/* Right-side button (hidden on mobile) */}
        <div className="hidden md:flex">
          <a href="#contact" className="bg-black text-white px-4 py-2 rounded-3xl">
            Contacteaza-ne
          </a>
        </div>

        {/* Burger Button (always visible on mobile) */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleNav} className="text-black text-3xl">
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: "100%" }} // Start off-screen
            animate={{ x: 0 }} // Slide in
            exit={{ x: "100%" }} // Slide out
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 flex flex-col items-center justify-center text-white text-2xl space-y-6 z-40"
          >
            <a href="#home" onClick={closeNav}>Home</a>
            <a href="#about" onClick={closeNav}>About</a>
            <a href="#pricing" onClick={closeNav}>Preturi</a>
            <a href="#program" onClick={closeNav}>Program</a>
            <a href="#contact" onClick={closeNav} className="bg-white text-black px-6 py-2 rounded-2xl">
              Contacteaza-ne
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
