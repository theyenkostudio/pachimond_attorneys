import { defineType, defineField } from "sanity";

export const termsType = defineType({
  name: "terms",
  title: "Terms of use",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "content", type: "string", title: "Content" }),
  ],
  preview: {
    select: { title: "title", subtitle: "content" },
  },
});
