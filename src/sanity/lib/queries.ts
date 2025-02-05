import { defineQuery } from "next-sanity";

export const blogquery = defineQuery(`*[_type == "blog"] | order(_createdAt asc){
      "image_url":image.asset->url,
      title,
      description,
      "slug":slug.current
    }`)