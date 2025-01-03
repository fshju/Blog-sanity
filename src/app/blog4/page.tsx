import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const GreatPyramidOfGiza: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        The Great Pyramid of Giza: A Monumental Wonder of Ancient Egypt
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post4.png" 
          alt="Great Pyramid of Giza"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Great Pyramid of Giza is one of the most extraordinary and enduring
          monuments of ancient Egypt. Located on the Giza Plateau, it is the last of the
          Seven Wonders of the Ancient World still standing today. Constructed around
          2580-2560 BC during the reign of Pharaoh Khufu, the Great Pyramid is a
          testament to the engineering prowess and architectural skill of the ancient Egyptians.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          The Great Pyramid was built as a tomb for Pharaoh Khufu, also known as Cheops.
          It was constructed using millions of limestone blocks, each weighing several tons,
          and is thought to have taken around 20 years to complete. The pyramid originally stood
          at a height of 146.6 meters (481 feet), making it the tallest man-made structure in
          the world for over 3,800 years.
        </p>
        <p>
          The pyramid&apos;s construction techniques remain a subject of debate and speculation
          among scholars. Some believe that it was built using a series of ramps, while others
          suggest more complex methods of lifting the massive stone blocks.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Architecture</h2>
        <p>
          The Great Pyramid is a marvel of ancient architecture. Its base measures approximately
          230 meters (755 feet) on each side, covering an area of 13 acres. It was originally
          clad in highly polished Tura limestone, which would have made the pyramid gleam in the
          sun, but most of this casing has been removed over time.
        </p>
        <p>
          The pyramid&apos;s internal structure includes a series of chambers, tunnels, and shafts.
          The King&apos;s Chamber, located at the heart of the pyramid, is where Pharaoh Khufu&apos;s sarcophagus
          was placed. The Grand Gallery, a vast passageway that leads to the King&apos;s Chamber, is an
          architectural wonder in itself.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Significance</h2>
        <p>
          The Great Pyramid of Giza was designed as a tomb to honor Pharaoh Khufu, ensuring his
          safe passage to the afterlife. It was believed that the pyramid&apos;s alignment with the
          cardinal points and the stars was symbolic of the Pharaoh&apos;s journey to the gods.
        </p>
        <p>
          The pyramid&apos;s size and precision in construction reflect the power and wealth of ancient Egypt.
          It was constructed with a remarkable level of accuracy, with each side of the pyramid being
          nearly perfectly aligned with the cardinal directions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Cultural Impact</h2>
        <p>
          The Great Pyramid has captured the imagination of people for centuries. It has been the subject
          of countless myths, legends, and theories, many of which are tied to its mystery and grandeur.
          The pyramid&apos;s construction remains an enduring symbol of human ingenuity, and it continues to
          inspire awe in those who visit it today.
        </p>
        <p>
          The Great Pyramid, along with the other pyramids at Giza, has become an iconic representation
          of ancient Egyptian culture and history. It is frequently depicted in art, literature, and film.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Modern Day Great Pyramid</h2>
        <p>
          Today, the Great Pyramid of Giza remains one of the most famous archaeological sites in the world.
          It is part of the Giza pyramid complex, which includes the Sphinx and other pyramids, and it attracts
          millions of tourists each year.
        </p>
        <p>
          Efforts are ongoing to preserve the Great Pyramid, as environmental factors such as pollution and
          natural erosion continue to affect its structure. Nevertheless, it remains an iconic symbol of Egypt&apos;s
          ancient civilization and is a UNESCO World Heritage Site.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mt-6">Fun Facts</h2>
          <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
            <li className="text-gray-800">The Great Pyramid was originally covered in smooth, white limestone, making it shine brightly in the sun.</li>
            <li className="text-gray-800">It is estimated that around 2.3 million blocks of stone were used in the construction of the pyramid.</li>
            <li className="text-gray-800">The Great Pyramid was the tallest man-made structure in the world for over 3,800 years until the completion of the Lincoln Cathedral in England in 1311.</li>
            <li className="text-gray-800">The pyramid is aligned with incredible precision to the cardinal points, with a tolerance of only a few arc minutes.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion</h2>
        <p>
          The Great Pyramid of Giza is not only an architectural wonder but also a symbol of Egypt&apos;s
          power, culture, and ingenuity. It remains one of the most impressive and enduring monuments
          from ancient times, continuing to captivate the world with its majesty and mystery.
        </p>

        <div className="text-center mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            Go Back to Homepage
          </Link>
        </div>
      </div>
      <CommentSection/>
    </div>
  );
};

export default GreatPyramidOfGiza;
