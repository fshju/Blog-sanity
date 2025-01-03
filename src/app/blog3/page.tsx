import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const Colosseum: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        The Colosseum: A Monument to Ancient Rome&apos;s Glory
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post3.jpeg"
          alt="Colosseum"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Colosseum, one of the most iconic structures of ancient Rome, is
          an amphitheater that symbolizes the grandeur of Imperial Rome. Known
          for its sheer size and architectural brilliance, it remains a symbol
          of strength, entertainment, and the culture of ancient Rome.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          The Colosseum was completed in 80 AD under Emperor Titus, after
          approximately 10 years of construction. Originally called the Flavian
          Amphitheatre, it was built to host public spectacles like gladiator
          contests, mock naval battles, animal hunts, and other forms of
          entertainment.
        </p>
        <p>
          It could hold up to 50,000 spectators and is considered an engineering
          marvel of its time, showcasing the advanced skills of Roman architects
          and engineers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Architecture
        </h2>
        <p>
          The Colosseum is an elliptical structure, measuring 189 meters in
          length, 156 meters in width, and 48 meters in height. It is
          constructed using concrete and stone, with the outer facade featuring
          three tiers of arches, each adorned with columns in different
          architectural orders: Doric, Ionic, and Corinthian.
        </p>
        <p>
          The arena was originally covered with a retractable canvas roof, known
          as the &quot;velarium,&quot; which provided shade to spectators during
          events. The arena floor was made of wood, covered with sand to absorb
          the bloodshed of gladiatorial contests, giving rise to the term
          &quot;arena&quot; (which means sand in Latin).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Significance
        </h2>
        <p>
          The Colosseum was the center of public entertainment in ancient Rome.
          It was a place where emperors showcased their power, and where the
          public could witness the grandeur of the Roman Empire through violent
          spectacles and complex performances. Despite the brutal nature of many
          of the events, the Colosseum became a symbol of Rome&apos;s
          magnificence.
        </p>
        <p>
          Today, it stands as a UNESCO World Heritage Site and is one of the
          most visited landmarks in the world, attracting millions of tourists
          each year.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Cultural Impact
        </h2>
        <p>
          Over the centuries, the Colosseum has inspired various works of art,
          literature, and films, cementing its place in popular culture. It
          represents the power and ambition of the Roman Empire, and has often
          been depicted in movies and books as a symbol of ancient grandeur.
        </p>
        <p>
          The Colosseum&apos;s role as a monument to human creativity, strength,
          and the complexities of the ancient world continues to resonate today.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Modern Day Colosseum
        </h2>
        <p>
          In modern times, the Colosseum has become a symbol of resilience,
          having survived natural disasters such as earthquakes and the ravages
          of time. Despite the damage it has sustained over the years, it
          remains one of the most well-preserved monuments of the ancient world.
        </p>
        <p>
          Preservation efforts continue to ensure that future generations can
          experience the grandeur of the Colosseum. It is now a popular tourist
          destination and serves as a reminder of the artistic and architectural
          achievements of ancient Rome.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mt-6">
            Fun Facts
          </h2>
          <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
            <li className="text-gray-800">
              The Colosseum could hold between 40,000 to 70,000 spectators.
            </li>
            <li className="text-gray-800">
              It hosted gladiatorial games and reenactments of famous battles,
              including naval battles.
            </li>
            <li className="text-gray-800">
              The Colosseum was partially damaged by earthquakes in the 14th and
              16th centuries.
            </li>
            <li className="text-gray-800">
              It has been featured in several movies, including *Gladiator*
              (2000), which won multiple Academy Awards.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Conclusion
        </h2>
        <p>
          The Colosseum stands as a symbol of the ingenuity and ambition of the
          Roman Empire. Its history, architecture, and cultural impact continue
          to influence the world today, making it one of the most important
          historical landmarks on the planet.
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

export default Colosseum;
