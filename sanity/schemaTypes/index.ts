import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { aboutSectionType } from "./aboutSection";
import { serviceType } from "./service";
import { testimonialType } from "./testimonial";
import { faqType } from "./faq";
import { teamMemberType } from "./teamMember";
import { legalType } from "./legal";
import { privacyType } from "./privacy";
import { termsType } from "./terms";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    aboutSectionType,
    serviceType,
    testimonialType,
    faqType,
    teamMemberType,
    legalType,
    privacyType,
    termsType
  ],
};
