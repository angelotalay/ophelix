export const DOCUMENTS = {
  carousel: "carousel",
  company: "company",
  cta: "cta",
  footer: "footer",
  hero: "hero",
  navbar: "navigationHeader",
  page: "page",
  siteSettings: "siteSettings",
  testimonial: "testimonial",
  userStory: "userStorySection",
} as const satisfies Record<string, string>;

export const COMMON_OBJECTS = {
  address: "address",
  alignment: "alignment",
  imageAsset: "imageAsset",
  navigationLink: "navigation",
  richText: "richText",
  socialMedia: "socialMedia",
} as const satisfies Record<string, string>;

export const OBJECTS = {
  carousel: "carouselSection",
  cta: "ctaSection",
  hero: "heroSection",
  splitCta: "splitSection",
  userStory: "userStoryInstance",
} as const satisfies Record<string, string>;

export const PAGE_TYPES = {
  landing: "landingPage",
} as const satisfies Record<string, string>;
