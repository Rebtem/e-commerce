"use client"

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">RT Store</h2>
          <p className="mt-2 text-gray-400">Your one-stop shop for the latest gadgets and more.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
          </ul>
        </div>
        
        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          </div>
          <h3 className="text-lg font-semibold mt-4">Subscribe</h3>
          <form className="mt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded text-black" 
            />
            <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} RT Store. All Rights Reserved.
      </div>
    </footer>
  );
}

