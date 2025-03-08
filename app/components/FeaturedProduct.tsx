"use client";

import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "iphone",
    price: "$899",
    image: "/feat/iphone.png",
  },
  {
    id: 2,
    name: "Samsung Phone",
    price: "$1,499",
    image: "/feat/SAMSUG.jpg",
  },
  {
    id: 3,
    name: "Generator",
    price: "$199",
    image: "/feat/GEN.png",
  },
];


const FeaturedProduct = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-64 object-contain"
            />
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link href={`/product/${product.id}`}>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
