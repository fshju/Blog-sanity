"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/sanity/lib/fetchBlogs";


interface Blog {
  _id: string;
  image_url: string;
  title: string;
  description: string;
  slug: string;
}

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data || []));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg shadow-lg overflow-hidden">
            <Image src={blog.image_url} alt={blog.title} width={400} height={250} className="w-full h-60 object-cover" />
            
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-2">{blog.description}</p>
              <Link href={`/blog/${blog.slug}`} className="text-blue-500 font-semibold hover:underline">
                See More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

