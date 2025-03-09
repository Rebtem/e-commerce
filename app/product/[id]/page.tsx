import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock product data (Replace this with API data in the future)
const products = [
  {
    id: "1",
    name: "iphone",
    price: "$899",
    image: "/feat/iphone.png",
    description: "This is a quality phone ",
  },
  {
    id: "2",
    name: "Samsung Phone",
    price: "$1,499",
    image: "/feat/SAMSUG.jpg",
    description: "This is a quality phone ",
  },
  {
    id: "3",
    name: "Generator",
    price: "$199",
    image: "/feat/GEN.png",
    description: "This is a quality phone ",
  },
];

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  if (!params?.id) return notFound();

  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound(); // Show 404 if product is not found

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <Image src={product.image} alt={product.name} width={500} height={400} className="rounded-lg" />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
            <Link href="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
