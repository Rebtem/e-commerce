export default function Shop() {
    const products = [
      { id: 1, name: "Sneaker", price: "$299", image: "/sneaker.jpg" },
      { id: 2, name: "Socks", price: "$899", image: "/13.jpg" },
      { id: 3, name: "Smart Television", price: "$99", image: "/tv.jpg" },
      { id: 4, name: "Wristwatch", price: "$99", image: "/12.png" },
      { id: 5, name: "Power Bank", price: "$99", image: "/11.png" },
      {id:6, title: "Kettle 2", price: "$60", image: "/kettle2.jpg" },
      { id:7, title: "Microwave", price: "$80", image: "/Microwave.png" },
      { id:8, title: "Swallow Maker", price: "$100", image: "/swallo maker.jpg" },
      { id:9, title: "Product 1", price: "$90", image: "/1.jpg" },
      { id:10, title: "Blender", price:  "$90", image: "/Blender.png" },
      {id:11,  title: "Electric Jug", price: "$40", image: "/Electricjug.png" },
      { id:12, title: "Cooker", price:  "$90", image: "/cooker.jpg" },
      {id:13,  title: "Iron", price:  "$50", image: "/iron.jpg" },
      { id:14, title: "Kettle", price:  "$110", image: "/kettle.jpg" },
      { id:15, title: "Computer", price:  "$120", image: "/computer.jpg" },
  ];
      
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  