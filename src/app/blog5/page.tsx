import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const AcropolisOfAthens: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        The Acropolis of Athens: A Legacy of Ancient Greek Civilization
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post5.jpg"
          alt="Acropolis of Athens"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Acropolis of Athens is one of the most important archaeological
          sites in the world, symbolizing the power, culture, and intellectual
          achievements of ancient Greece. Perched on a rocky hill above Athens,
          the Acropolis houses some of the finest examples of ancient Greek
          architecture, including the Parthenon, the Temple of Athena Nike, and
          the Erechtheion.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          The Acropolis has been inhabited since the Neolithic period, but its
          golden age began in the 5th century BC during the rule of Pericles.
          Under his leadership, several major structures were constructed,
          including the Parthenon, a temple dedicated to the goddess Athena, the
          patron deity of Athens.
        </p>
        <p>
          The Acropolis served as a religious center and a symbol of Athenian
          identity. Over the centuries, it experienced several modifications,
          including conversions into churches, mosques, and even a military
          fortress.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Architecture
        </h2>
        <p>
          The Acropolis is renowned for its exceptional architecture, and its
          most famous structure is the Parthenon. Designed by architects Ictinos
          and Callicrates and sculpted by Phidias, the Parthenon is a symbol of
          ancient Greek ingenuity and artistic excellence.
        </p>
        <p>
          Built primarily of marble, the Parthenon features the iconic Doric
          style of architecture, with its fluted columns and intricate
          sculptural details. The Parthenon&apos;s frieze and metopes depict
          scenes of Greek mythology, showcasing the cultural and religious
          significance of the temple.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Significance
        </h2>
        <p>
          The Acropolis of Athens holds great historical and cultural
          significance as the cradle of Western civilization. It represents the
          ideals of democracy, philosophy, art, and science, which flourished in
          ancient Athens and influenced the development of Western culture.
        </p>
        <p>
          The Acropolis also reflects the profound connection between religion
          and architecture in ancient Greece. The temples and monuments were
          built to honor the gods and serve as places of worship, reflecting the
          importance of religion in daily life.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Cultural Impact
        </h2>
        <p>
          The Acropolis has had an immense influence on Western culture and has
          served as an inspiration for countless generations. The ideas of
          democracy, logic, and intellectual inquiry that originated in Athens
          have shaped modern Western philosophy and political thought.
        </p>
        <p>
          The architectural beauty of the Acropolis has also left an indelible
          mark on art and design, influencing countless buildings and monuments
          throughout history. The Parthenon&apos;s proportions and harmony have
          been studied by architects and scholars for centuries.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Modern Day Acropolis
        </h2>
        <p>
          Today, the Acropolis remains a vital symbol of Greek identity and
          heritage. It is one of the most visited tourist attractions in the
          world, drawing millions of visitors each year who come to marvel at
          its beauty and history.
        </p>
        <p>
          Preservation efforts are ongoing to maintain the Acropolis and its
          monuments. The Greek government, along with international
          organizations like UNESCO, continues to protect and conserve this
          extraordinary archaeological site.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-800 mt-6">
            Fun Facts
          </h2>
          <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
            <li className="text-gray-800">
              The Parthenon was originally covered in a gold and ivory statue of
              Athena created by Phidias.
            </li>
            <li className="text-gray-800">
              The Acropolis was heavily damaged during the 17th century when the
              Venetians bombarded the site during a conflict with the Ottoman
              Empire.
            </li>
            <li className="text-gray-800">
              The word &quot;Acropolis&quot; comes from the Greek words
              &quot;akros&quot; (meaning &quot;highest point&quot;) and
              &quot;polis&quot; (meaning &quot;city&quot;).
            </li>
            <li className="text-gray-800">
              The Acropolis has been the inspiration for numerous architectural
              styles, including neoclassical buildings across the world.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Conclusion
        </h2>
        <p>
          The Acropolis of Athens stands as a lasting testament to the
          achievements of ancient Greece. Its monuments, particularly the
          Parthenon, continue to inspire awe and admiration. The Acropolis
          represents the ideals of the ancient Greeks and serves as a reminder
          of the cultural and intellectual legacy that continues to influence
          the world today.
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

export default AcropolisOfAthens;
