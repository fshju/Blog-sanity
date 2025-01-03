import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/Comments";
const GreatWallOfChina: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        The Great Wall of China: A Monument to Resilience and History
      </h1>

      {/* Responsive Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/post2.jpg" 
          alt="The Great Wall of China"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="text-lg text-gray-700 space-y-6">
        <p>
          The Great Wall of China, an enduring symbol of human ingenuity and
          perseverance, stretches over 13,000 miles across China&apos;s northern
          frontier. Its remarkable history and cultural significance make it one
          of the most awe-inspiring structures ever created. From its ancient
          beginnings to its status today as a UNESCO World Heritage Site, the
          Great Wall has withstood the test of time, standing tall as a beacon of
          strength and resilience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">History</h2>
        <p>
          Construction of the Great Wall began over 2,000 years ago during the
          Warring States period (475–221 BC), when various Chinese states built
          walls to defend their territories from nomadic invasions. However, it
          was Emperor Qin Shi Huang, the first emperor of a unified China, who is
          most famously associated with the Great Wall. After unifying China in
          221 BC, Emperor Qin ordered the connection of existing walls and the
          construction of new segments, which collectively became the foundation
          of the Great Wall as we know it today.
        </p>
        <p>
          The primary goal of the Great Wall was to provide military defense
          against invasions, especially from nomadic tribes such as the Xiongnu.
          Over the centuries, different dynasties, including the Han, Ming, and
          others, expanded, rebuilt, and reinforced the wall, making it one of
          the largest construction projects in human history.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Architecture</h2>
        <p>
          The Great Wall is not a single continuous wall, but rather a network of
          walls, watchtowers, fortresses, and beacon towers. The architecture of
          the wall varies greatly depending on the region and the materials
          available at the time of construction. Some parts of the wall were built
          using rammed earth, while others used bricks and stone, especially
          during the Ming dynasty when more durable materials were used.
        </p>
        <p>
          The wall is designed to serve both defensive and surveillance purposes.
          Watchtowers, spaced at regular intervals, provided a vantage point for
          soldiers to monitor the surrounding areas. Beacon towers were used to
          communicate with other parts of the wall, sending signals about
          approaching invaders through the use of smoke and fire.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Strategic Importance</h2>
        <p>
          The Great Wall&apos;s strategic importance cannot be overstated. It served
          as a barrier that protected the heart of the Chinese empire from
          external threats. Over the centuries, invaders attempted to breach the
          wall, but its complex design, strong fortifications, and vigilant guards
          made it a formidable defense.
        </p>
        <p>
          During the Ming dynasty (1368–1644), the Great Wall was at its peak,
          with many sections of the wall being rebuilt and reinforced. The Ming
          emperors also built many fortifications and garrison stations along the
          wall to house soldiers, ensuring that the wall could be defended at all
          times.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Cultural Significance</h2>
        <p>
          The Great Wall of China is much more than just a physical barrier; it
          holds deep cultural significance. The wall represents the perseverance,
          dedication, and strategic genius of the Chinese people. It is also a
          symbol of the broader human struggle against adversity. The wall, with
          its towering height and miles of winding paths, has come to represent
          the strength and resilience of the Chinese empire.
        </p>
        <p>
          The wall was not only a means of defense; it also served as a route for
          trade, culture, and ideas to flow between different regions of China. The
          famous Silk Road, which connected China to the West, passed through
          several parts of the Great Wall. This allowed goods, knowledge, and
          culture to travel along with the military protection offered by the wall.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Modern Times</h2>
        <p>
          In modern times, the Great Wall of China has become a symbol of China&apos;s
          rich cultural heritage. It remains one of the most popular tourist
          destinations in the world, attracting millions of visitors each year. Many
          parts of the wall have been preserved or restored, allowing visitors to
          walk along the ancient structure and take in stunning views of the
          surrounding mountains and valleys.
        </p>
        <p>
          The Great Wall is also a UNESCO World Heritage Site, recognized for its
          historical and cultural significance. Efforts have been made to preserve
          and protect the wall, as parts of it have been damaged by natural
          erosion, human activity, and time.
        </p>
        <p>
          Despite the challenges, the Great Wall of China continues to stand as a
          testament to the strength and resilience of the Chinese people. It reminds
          us of the enduring power of human achievement and the ability to overcome
          obstacles, no matter how formidable.
        </p>

        {/* Highlight Fun Facts Section */}
        <div className="bg-indigo-100">
        <h2 className="text-2xl font-semibold text-indigo-800 mt-6">Fun Facts</h2>
        <ul className="list-disc pl-6 space-y-2 p-4 rounded-md shadow-md">
          <li className="text-gray-800">The Great Wall is not a single continuous wall.</li>
          <li className="text-gray-800">It took over 2,000 years to complete.</li>
          <li className="text-gray-800">The Great Wall is the longest wall in the world.</li>
          <li className="text-gray-800">The wall follows the natural contours of the landscape.</li>
        </ul>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion</h2>
        <p>
          The Great Wall of China is a monumental achievement in both architecture
          and history. It stands as a testament to the determination, strength, and
          strategic vision of the Chinese people. From its humble beginnings as a
          series of small walls to its current status as one of the world&apos;s most
          famous landmarks, the Great Wall remains an enduring symbol of resilience
          and protection. Whether seen as a defense, a cultural marker, or a symbol
          of perseverance, the Great Wall of China continues to inspire awe and
          admiration from people around the world.
        </p>

        <div className="text-center mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            Go Back to Homepage
          </Link>
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default GreatWallOfChina;
