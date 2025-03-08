"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import useCart

export default function Navbar() {
  const messages = [
    "🎉 Awoof of the Month: Huge Discounts on Gadgets! 🎉",
    "🔥 Limited Time Offer: Save Big on Electronics! 🔥",
    "💥 Flash Sale: Get Your Favorite Items at Unbeatable Prices! 💥",
  ];
  const [index, setIndex] = useState(0);
  const { cart } = useCart(); // Get cart data from context

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Changes message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="relative bg-gray-900 text-white p-4 shadow-md overflow-hidden">
      {/* Awoof of the Month Announcement */}
      <motion.div
        key={index}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white-400 text-lg font-bold"
        initial={{ x: "100%" }}
        animate={{ x: "-50%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {messages[index]}
      </motion.div>

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">RT Store</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About Us</Link>
          <Link href="/shop" className="hover:text-yellow-400">Shop</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Cart Icon with Count */}
        <Link href="/cart" className="relative flex items-center">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
