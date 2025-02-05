import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-semibold text-indigo-800 my-6">{children}</h2>,
    normal: ({ children }) => <p className="text-gray-800 mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 p-4 bg-indigo-100 rounded-md shadow-md">{children}</ul>,
  },
};