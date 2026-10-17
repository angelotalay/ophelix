const ctaSectionFragment = `{
    alignment,
    intent,
    ctaImage,
    "ctaNavigation1": content -> ctaNavigation1, 
    "ctaNavigation2": content->ctaNavigation2, 
    "ctaText": content->text, 
    "ctaTitle": content->title,
    "supportingNote": content->supportingNote,
    textAlignment,
  }` as const;

export default ctaSectionFragment;