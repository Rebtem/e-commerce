import Image from "next/image";

const FeaturedProduct: React.FC = () => {
  const products = [
    { id: 1, title: "Product 1", price: 100, image: "/1.jpg" },
    { id: 2, title: "Blender", price: 120, image: "/Blender.png" },
    { id: 3, title: "Electric Jug", price: 500, image: "/Electricjug.png" },
    { id: 4, title: "Cooker", price: 200, image: "/cooker.jpg" },
    { id: 5, title: "Iron", price: 100, image: "/iron.jpg" },
    { id: 6, title: "Kettle", price: 100, image: "/kettle.jpg" },
    { id: 7, title: "Kettle 2", price: 100, image: "/kettle2.jpg" },
    { id: 8, title: "Microwave", price: 100, image: "/Microwave.png" },
    { id: 9, title: "Swallow Maker", price: 100, image: "/swallow-maker.jpg" },
    { id: 10, title: "Computer", price: 100, image: "/computer.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-t-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                priority
              />
            </div>

            <div className="p-4 text-center w-full">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
