import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const aboutSectionType = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "about",
      type: "text",
      title: "About Company",
      rows: 3,
    }),
    defineField({
      name: "message",
      type: "text",
      title: "Message from Founder",
    }),
    defineField({
      name: "team",
      type: "array",
      title: "Team Members",
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "about",
    },
    prepare({ title }) {
      return {
        title: title || "About Section",
        subtitle: "Includes About + Team",
      };
    },
  },
});
