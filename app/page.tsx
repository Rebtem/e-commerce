import Link from "next/link";
import Slider from "./components/Slider";
import PopularProducts from "./components/PopularProducts";
import Subscribe from "./components/Subscribe";
import FeaturedProduct from "./components/FeaturedProduct";

const Homepage = () => {
    return (
        <div>
            <Slider />
            
            <section>
             
                <PopularProducts />
            </section>

            <section>
                
                <FeaturedProduct />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
                <Subscribe />
            </section>

            {/* Links to Other Pages Instead of Importing Them */}
            <section id="about">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p>Learn more about our store.</p>
                <Link href="/about" className="text-blue-500 hover:underline">Read More</Link>
            </section>

            <section id="shop">
                <h2 className="text-2xl font-bold mb-4">Shop</h2>
                <p>Browse our collection of gadgets.</p>
                <Link href="/shop" className="text-blue-500 hover:underline">Shop Now</Link>
            </section>

            <section id="contact">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p>Have questions? Get in touch with us.</p>
                <Link href="/contact" className="text-blue-500 hover:underline">Contact Us</Link>
            </section>
        </div>
    );
};

export default Homepage;
