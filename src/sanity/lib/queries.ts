export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  features
}`;

export const pricingPlansQuery = `*[_type == "pricingPlan"] | order(order asc) {
  _id,
  name,
  description,
  priceLabel,
  pricePrefix,
  period,
  isCustomPrice,
  features,
  highlighted,
  ctaLabel
}`;

export const faqItemsQuery = `*[_type == "faqItem"] | order(order asc) {
  _id,
  question,
  answer
}`;

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] | order(order asc) {
  _id,
  name,
  role,
  company,
  quote,
  rating,
  avatar
}`;

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  author
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  author,
  body
}`;

export const blogPostSlugsQuery = `*[_type == "post" && defined(slug.current)][].slug.current`;
