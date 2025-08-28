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
      name: "email",
      type: "string",
      title: "Company Email",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Company Phone Number",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Company Location",
    }),
    defineField({
      name: "facebook",
      type: "string",
      title: "Facebook URL",
    }),
    defineField({
      name: "instagram",
      type: "string",
      title: "Instagram URL",
    }),
    defineField({
      name: "twitter",
      type: "string",
      title: "X(Twitter) URL",
    }),
    defineField({
      name: "message",
      type: "string",
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
