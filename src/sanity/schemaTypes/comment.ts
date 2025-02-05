export default {
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "email",
        type: "string",
        title: "Email",
      },
      {
        name: "comment",
        type: "text",
        title: "Comment",
      },
      {
        name: "blog",
        type: "reference",
        to: [{ type: "blog" }], // Reference to the "blog" schema
        title: "Blog Post",
      },
    ],
  };