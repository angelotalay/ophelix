const faqSectionFragment = `
{
  title,
  text,
  "faqItems": faqSet->faqItems,
  "navigation": ctaNavigation{
    title,
    type,
    type == "internal" => {
      internalLink
    },
    type == "external" => {
      externalLink
    }
  }
}
` as const;

export default faqSectionFragment;