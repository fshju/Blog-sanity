import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center top-5 mb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover blur-lg"
        style={{
          backgroundImage: `url('/post2.jpg')`,
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0"></div>

      {/* Contact Form */}
      <div className="relative z-10 shadow-2xl shadow-black  border-transparent p-8 md:p-12 w-full max-w-lg bg-transparent">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h1>
        <p className="text-black text-center mb-8">
          Reach out to us for inquiries or information about the monument.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            You can also reach us at{" "}
            <Link
              href="mailto:info@historicalmonument.com"
              className="text-red-600 hover:underline"
            >
              info@historicalmonument.com
            </Link>
          </p>
          <p className="text-sm text-white mt-2">
            Call us: <Link href="tel:+1234567890">+1 234 567 890</Link>
          </p>
        </div>
      </div>
        </div>
  );
};

export default Contact;
