import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const TajMahal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Taj Mahal: A Monument to Eternal Love and Grandeur
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post1.jpg"
          alt="Taj Mahal"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Taj Mahal, one of the most iconic and recognized structures in the
          world, stands as a symbol of eternal love. Commissioned by Emperor Shah
          Jahan in 1631 in memory of his beloved wife, Mumtaz Mahal, this
          architectural marvel is a testament to the grandeur and beauty of Mughal
          architecture.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          The Taj Mahal was built over a period of 22 years, with construction
          beginning in 1632 and the main mausoleum being completed in 1643. It was
          later completed with surrounding gardens, a mosque, and a guest house in
          1653. The Taj Mahal is made primarily of white marble, which was sourced
          from the Makrana region in Rajasthan, India.
        </p>
        <p>
          Emperor Shah Jahan wanted to build a monument that was unparalleled in
          beauty to house the tomb of his wife, Mumtaz Mahal, who died during the
          birth of their 14th child. The Taj Mahal&apos;s construction involved the
          expertise of thousands of artisans, craftsmen, and engineers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Architecture</h2>
        <p>
          The Taj Mahal is a masterpiece of Mughal architecture, blending
          elements from Persian, Ottoman Turkish, and Indian architectural styles.
          The central structure, which houses the tombs of Shah Jahan and Mumtaz
          Mahal, is set against a backdrop of lush, symmetrical gardens.
        </p>
        <p>
          The entire structure is built from white marble, with intricate carvings
          and inlay work. The marble itself changes color throughout the day, with
          hues of pink, gold, and white depending on the light. The dome rises to
          240 feet (73 meters) and is surrounded by four grand minarets.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Significance</h2>
        <p>
          The Taj Mahal is often referred to as a symbol of undying love, as it
          was built in the memory of Mumtaz Mahal. The monument has become a
          symbol of the rich cultural heritage of India and a representation of
          the grandeur of the Mughal Empire.
        </p>
        <p>
          It is one of the most visited tourist attractions in the world, drawing
          millions of visitors each year. The Taj Mahal was designated as a UNESCO
          World Heritage Site in 1983, recognizing its cultural and architectural
          importance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Cultural Impact</h2>
        <p>
          Over the centuries, the Taj Mahal has inspired countless poets, artists,
          and musicians. It has been celebrated in literature, paintings, and
          songs, with many describing it as the most beautiful building in the
          world.
        </p>
        <p>
          The Taj Mahal has also played an important role in shaping India&apos;s
          cultural identity. Its depiction in films, photography, and media has
          helped cement its place as one of the most iconic symbols of India&apos;s
          rich heritage.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Modern Day Taj Mahal</h2>
        <p>
          Today, the Taj Mahal remains a global symbol of love and devotion. It
          stands as a testament to the beauty and creativity of Mughal
          architecture, attracting tourists from all over the world. Efforts have
          been made to preserve the Taj Mahal, as air pollution and environmental
          factors have taken a toll on its structure. The Indian government, along
          with international organizations, continues to take steps to preserve
          the monument&apos;s beauty and cultural significance.
        </p>
        <p>
          The Taj Mahal&apos;s timeless beauty and significance continue to make it one
          of the most celebrated monuments in the world.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
        <h2 className="text-2xl font-semibold text-indigo-800 mt-6">Fun Facts</h2>
        <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
          <li className="text-gray-800">The Taj Mahal is made of white marble and is known for its color-changing hues throughout the day.</li>
          <li className="text-gray-800">The Taj Mahal is a symbol of eternal love, built in memory of Mumtaz Mahal, the wife of Emperor Shah Jahan.</li>
          <li className="text-gray-800">Over 20,000 artisans, craftsmen, and laborers worked on the construction of the Taj Mahal.</li>
          <li className="text-gray-800">It is believed that Shah Jahan wanted to build a similar black marble mausoleum for himself across the river, but this plan was never realized.</li>
        </ul>
       </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion</h2>
        <p>
          The Taj Mahal is more than just a monument; it is a symbol of love, art,
          and architectural brilliance. It continues to captivate the world with
          its beauty and history, drawing visitors from every corner of the globe.
          The Taj Mahal is a testament to the legacy of the Mughal Empire and the
          enduring love between Shah Jahan and Mumtaz Mahal.
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

export default TajMahal;
