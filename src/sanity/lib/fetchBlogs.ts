import { client } from "@/sanity/lib/client";

export async function getAllBlogs() {
  const query = `
    *[_type == "blog"] | order(_createdAt desc) {
      _id,
      "image_url": image.asset->url,
      title,
      description,
      "slug": slug.current
    }
  `;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogData(slug: string) {
  if (!slug) return null;

  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      "image_url": image.asset->url,
      title,
      content
    }
  `;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}
