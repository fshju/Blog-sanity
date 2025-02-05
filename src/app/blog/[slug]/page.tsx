// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { PortableText } from "@portabletext/react";
// import { client } from "@/sanity/lib/client";
// import { components } from "@/components/CustomComponent";
// import CommentSection from "@/components/Comments";
// import blog from "@/sanity/schemaTypes/blog";

// async function getBlogData(slug: string) {
//   const blogQuery = `
//     *[_type == "blog" && slug.current == $slug] {
//       _id,
//       "image_url": image.asset->url,
//       title,
//       content,
//       "slug": slug.current,
//       comments
//     }[0]
//   `;


// }


//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//         {blog.title}
//       </h1>

//       <div className="relative w-full h-96 mb-8">
//         <Image
//           src={blog.image_url}
//           alt={blog.title}
//           fill
//           className="rounded-lg shadow-lg object-cover"
//         />
//       </div>

      // <div className="text-lg text-gray-700 space-y-6">
      //   <PortableText value={blog.content} components={components} />
      // </div>

//       <CommentSection />

//       <div className="text-center mt-8">
//         <Link href="/" className="text-blue-500 hover:underline">
//           Go Back to Homepage
//         </Link>
//       </div>
//     </div>
//   );
// }








"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getBlogData } from "@/sanity/lib/fetchBlogs";
import Comments from "@/components/Comments";
import { components } from "@/components/CustomComponent";
interface Blog {
  _id: string;
  image_url: string;
  title: string;
  content: any;
}

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (!slug) return;
    if (typeof slug === 'string') {
      getBlogData(slug).then((data) => setBlog(data));
    }
  }, [slug]);

  if (!blog) {
    return <h1 className="text-center text-2xl font-bold py-12">Loading...</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
      
      <Image src={blog.image_url} alt={blog.title} width={800} height={400} className="rounded-lg shadow-lg object-cover w-full h-96" />
      
      <div className="text-lg text-gray-700 space-y-6 mt-6">
        <PortableText value={blog.content} components={components}  />
      </div>
<Comments/>
      <div className="text-center mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Go Back to Homepage
        </Link>
      </div>
    </div>
  );
}
