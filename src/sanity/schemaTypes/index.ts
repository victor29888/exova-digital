import type { SchemaTypeDefinition } from "sanity";
import { faqItem } from "./faqItem";
import { post } from "./post";
import { pricingPlan } from "./pricingPlan";
import { service } from "./service";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  pricingPlan,
  faqItem,
  post,
  testimonial,
];
