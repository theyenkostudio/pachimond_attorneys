import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroSectionType } from "./heroSection";
import { serviceType } from "./service";
import { testimonialType } from "./testimonial";
import { faqType } from "./faq";
import { teamMemberType } from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroSectionType,
    serviceType,
    testimonialType,
    faqType,
    teamMemberType,
  ],
};
