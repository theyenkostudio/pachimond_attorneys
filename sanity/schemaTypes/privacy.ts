import { defineType, defineField } from "sanity";

export const privacyType = defineType({
  name: "privacy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "content", type: "string", title: "Content" }),
  ],
  preview: {
    select: { title: "title", subtitle: "content" },
  },
});
