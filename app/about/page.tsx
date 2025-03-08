import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-900">
      {/* Left Side - About the Owner */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          At <strong>Our eCommerce Store</strong>, we believe in providing only 
         <strong> authentic, high-quality products.</strong> We are committed to excellence, 
          ensuring that everything you purchase from us is genuine, carefully 
          selected, and meets the highest standards.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Our founder, <strong>Okunola Rebecca</strong>, built this store on trust 
          and reliability. We never compromise on quality, and we guarantee 
          customer satisfaction. Whether you're shopping for your product type, 
          you can be sure you're getting the *best in the market.
        </p>
        <p className="mt-6 text-gray-800 dark:text-white font-semibold">
          No fake products. No compromises. Just quality.
        </p>
      </div>

      {/* Right Side - Owner's Picture */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/image.png" // Replace with actual image path
          alt="Founder of eCommerce Store"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
