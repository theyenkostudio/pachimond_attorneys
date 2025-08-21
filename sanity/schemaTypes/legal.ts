import { defineType, defineField } from "sanity";

export const legalType = defineType({
  name: "legal",
  title: "Legal notice",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "content", type: "string", title: "Content" }),
  ],
  preview: {
    select: { title: "title", subtitle: "content" },
  },
});
