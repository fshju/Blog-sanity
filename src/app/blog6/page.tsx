import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const StatueOfLiberty: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Statue of Liberty: A Symbol of Freedom and Democracy
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post7.jpg"
          alt="Statue of Liberty"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Statue of Liberty, located on Liberty Island in New York Harbor,
          is a global symbol of freedom, democracy, and hope. Gifted by France
          to the United States in 1886, the statue has become an iconic figure
          representing the American ideals of liberty, equality, and justice.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          The idea for the Statue of Liberty originated from French political
          thinker Édouard René de Laboulaye, who envisioned it as a gift from
          the people of France to the United States in recognition of the
          American Revolution and their fight for independence. French sculptor
          Frédéric Auguste Bartholdi designed the statue, while the internal
          framework was created by Gustave Eiffel, the engineer behind the
          Eiffel Tower.
        </p>
        <p>
          The statue was assembled in France in 1884 and disassembled for
          shipping to the United States. It was reassembled on Liberty Island in
          New York Harbor, where it was dedicated on October 28, 1886, by
          President Grover Cleveland.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Architecture
        </h2>
        <p>
          The Statue of Liberty stands 305 feet (93 meters) tall, including its
          pedestal, making it one of the tallest statues in the world. The
          statue itself is made of copper and stands atop a granite pedestal
          designed by architect Richard Morris Hunt.
        </p>
        <p>
          Lady Liberty holds a torch in her right hand, symbolizing
          enlightenment, and a tablet in her left hand, inscribed with the date
          of the American Declaration of Independence, July 4, 1776. The broken
          chain at her feet represents the abolition of slavery and the triumph
          of freedom over tyranny.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Significance
        </h2>
        <p>
          The Statue of Liberty has become an enduring symbol of hope for
          immigrants arriving in America, as well as a representation of the
          nation&apos;s commitment to the principles of liberty and justice. The
          statue embodies the welcoming spirit of the United States and stands
          as a beacon of freedom for people around the world.
        </p>
        <p>
          The statue&apos;s location on Liberty Island is a reminder of
          America&apos;s history as a land of opportunity, and its ability to
          offer sanctuary and a fresh start to those seeking a better life.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Cultural Impact
        </h2>
        <p>
          The Statue of Liberty has had a profound impact on American culture
          and is featured in literature, film, and art. Its image has been used
          in countless advertisements, protests, and campaigns, cementing its
          place as a global symbol of freedom.
        </p>
        <p>
          The statue is also closely associated with the concept of the
          &quot;American Dream.&quot; For millions of immigrants who arrived in
          the United States through Ellis Island, the sight of the Statue of
          Liberty marked the beginning of a new life filled with hope and
          opportunity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Modern Day Statue of Liberty
        </h2>
        <p>
          Today, the Statue of Liberty remains one of the most recognizable
          landmarks in the world. It continues to attract millions of visitors
          annually, who come to see the statue and learn about its history at
          the Statue of Liberty National Monument and Museum.
        </p>
        <p>
          The statue was designated as a National Monument in 1924 and is now
          part of the National Park Service. In 1984, it was designated a UNESCO
          World Heritage Site in recognition of its significance as a symbol of
          freedom and democracy.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mt-6">
            Fun Facts
          </h2>
          <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
            <li className="text-gray-800">
              The statue was originally a dull copper color but turned green due
              to natural oxidation over time.
            </li>
            <li className="text-gray-800">
              The Statue of Liberty was a gift from France to the United States
              to celebrate the centennial of American independence.
            </li>
            <li className="text-gray-800">
              The torch held by Lady Liberty is over 29 feet tall and weighs
              more than 5 tons.
            </li>
            <li className="text-gray-800">
              The statue&apos;s full name is “Liberty Enlightening the World”
              (La Liberté éclairant le monde in French).
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Conclusion
        </h2>
        <p>
          The Statue of Liberty remains one of the most enduring symbols of
          freedom and democracy in the world. Standing tall in New York Harbor,
          it continues to inspire individuals across the globe to pursue a life
          of liberty, justice, and opportunity. Its significance transcends
          borders and cultures, making it a true symbol of hope for all.
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

export default StatueOfLiberty;
