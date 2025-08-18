import { client } from "./client";
import { testimonialsQuery, faqQuery } from "./queries";

export const clientAPI = {
  getTestimonials: () => client.fetch(testimonialsQuery),
  getFaqs: () => client.fetch(faqQuery),
};

