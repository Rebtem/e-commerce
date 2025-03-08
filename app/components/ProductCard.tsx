import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import useCart

interface ProductProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, image }) => {
  const { addToCart } = useCart(); // Get addToCart function from context

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col items-center">
      {/* Image Container */}
      <div className="relative w-full h-48">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="contain" 
          className="rounded-md"
        />
      </div>
      
      {/* Product Details */}
      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">${price}</p>

      {/* View Details Button */}
      <Link href={`/product/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
        <button className="mt-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          View Details
        </button>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart({ title, price, image })}
        className="mt-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
