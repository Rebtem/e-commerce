"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import useCart
import { Menu, X } from "lucide-react"; // For mobile menu icon

export default function Navbar() {
  const messages = [
    "🎉 Awoof of the Month: Huge Discounts on Gadgets! 🎉",
    "🔥 Limited Time Offer: Save Big on Electronics! 🔥",
    "💥 Flash Sale: Get Your Favorite Items at Unbeatable Prices! 💥",
  ];

  const [index, setIndex] = useState(0);
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <nav className="relative bg-gray-900 text-white shadow-md">
      {/* Announcement Banner */}
      <motion.div
        key={index}
        className="text-center bg-yellow-500 text-sm py-2 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {messages[index]}
      </motion.div>

      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">RT Store</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About Us</Link>
          <Link href="/shop" className="hover:text-yellow-400">Shop</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 py-4">
          <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/shop" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

