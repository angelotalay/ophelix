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
`;

export default faqSectionFragment;