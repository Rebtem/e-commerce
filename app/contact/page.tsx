export default function Contact() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Have a question? Reach out to us and we will get back to you as soon as possible.
        </p>
        <form className="mt-6 max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-md h-32"></textarea>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  