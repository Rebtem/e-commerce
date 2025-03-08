"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

const AddToCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600">Continue Shopping</Link></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
              {/* Product Image */}
              <Image 
                src={product.image} 
                alt={product.title} 
                width={200} 
                height={200} 
                className="rounded-md"
              />
              
              {/* Product Info */}
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">${product.price}</p>

              {/* Remove from Cart Button */}
              <button 
                onClick={() => removeFromCart(product.title)} 
                className="mt-3 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="mt-6 flex justify-between">
          <Link href="/checkout">
            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
              Proceed to Checkout
            </button>
          </Link>
          <Link href="/">
            <button className="px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-lg">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCart;