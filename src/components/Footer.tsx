import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-indigo-600 py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Join Us in Preserving History</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Support our mission to protect and promote the world&apos;s historical
        monuments. Together, we can ensure that these treasures are preserved
        for future generations.
      </p>
      <Link href="/contact">
        <button className="bg-white text-indigo-600 font-bold py-2 px-6 rounded hover:bg-gray-100">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default Footer;
