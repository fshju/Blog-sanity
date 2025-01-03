import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    image: "/post1.jpg",
    title: "Taj Mahal",
    description: "A symbol of love and one of the Seven Wonders of the World, located in India.",
    link: "/blog1",
  },
  {
    id: 2,
    image: "/post2.jpg",
    title: "The Great Wall of China",
    description: "An ancient series of walls and fortifications stretching across China.",
    link: "/blog2",
  },
  {
    id: 3,
    image: "/post3.jpeg",
    title: "The Colosseum",
    description: "An iconic Roman amphitheater known for its history of gladiator battles.",
    link: "/blog3",
  },
  {
    id: 4,
    image: "/post4.png",
    title: "The Great Pyramid of Giza",
    description: "The oldest of the Seven Wonders of the Ancient World, located in Egypt.",
    link: "/blog4",
  },
  {
    id: 5,
    image: "/post5.jpg",
    title: "The Acropolis of Athens",
    description: "An ancient citadel on a rocky outcrop in Athens, Greece.",
    link: "/blog5",
  },
  {
    id: 6,
    image: "/post6.png",
    title: "Statue of Liberty",
    description: "A symbol of freedom and democracy, located in New York Harbor.",
    link: "/blog6",
  },
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <Link href={blog.link}>
                <p className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  See More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
