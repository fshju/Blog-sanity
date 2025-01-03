import React from "react";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('/hero-about.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          About Historical Monuments
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Preserving the Legacy of Humanity
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Historical monuments are timeless reminders of our shared past. They
          celebrate the achievements of civilizations, capture the essence of
          diverse cultures, and stand as testaments to human ingenuity. From
          ancient wonders to architectural marvels, these monuments tell the
          stories of our ancestors and inspire generations to come.
        </p>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Ancient Wonders */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ancient Wonders
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore the timeless beauty of ancient wonders like the Pyramids
              of Giza, the Hanging Gardens of Babylon, and the Colossus of
              Rhodes. These wonders are masterpieces of ancient engineering and
              imagination.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/about1.jpg"
              alt="Ancient Wonders"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Palaces */}
        <section className="flex flex-col  items-center md:flex-row-reverse">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Palaces</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover the grandeur of palaces such as the Taj Mahal, Versailles
              Palace, and Forbidden City. These palaces reflect the opulence and
              cultural richness of their eras.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/about3.jpg"
              alt="Palaces"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Architectural Marvels */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Architectural Marvels
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Marvel at extraordinary architectural achievements like the Eiffel
              Tower, Sydney Opera House, and the Great Wall of China. These
              structures push the boundaries of design and innovation.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/about4.jpg"
              alt="Architectural Marvels"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="flex flex-col  items-center md:flex-row-reverse">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cultural Heritage
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Immerse yourself in the rich cultural heritage of historical sites
              like Machu Picchu, Angkor Wat, and Kyoto Temples. These monuments
              capture the spirit and traditions of diverse communities.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/about5.jpg"
              alt="Cultural Heritage"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
