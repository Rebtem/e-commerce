
const PopularProducts: React.FC = () => {
    const products = [
        { id:1, title: "Product 1", price: 100, image: "/1.jpg" },
        { id:2, title: "Blender", price: 120, image: "/Blender.png" },
        {id:3,  title: "Electric Jug", price: 500, image: "/Electricjug.png" },
        { id:4, title: "Cooker", price: 200, image: "/cooker.jpg" },
        {id:5,  title: "Iron", price: 100, image: "/iron.jpg" },
        { id:6, title: "Kettle", price: 100, image: "/kettle.jpg" },
        {id:7, title: "Kettle 2", price: 100, image: "/kettle2.jpg" },
        { id:8, title: "Microwave", price: 100, image: "/Microwave.png" },
        { id:9, title: "Swallow Maker", price: 100, image: "/swallo maker.jpg" },
        { id:10, title: "Computer", price: 100, image: "/computer.jpg" },
    ];

    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Popular Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};
export default PopularProducts;
