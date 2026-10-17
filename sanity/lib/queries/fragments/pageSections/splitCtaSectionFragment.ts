const splitCtaSectionFragment = `{
      "eyebrow": content->eyebrow,
      "title": content->title,
      "ctaText": content->text,
      ctaImage,
      "ctaNavigation1": content->ctaNavigation1,
      "ctaNavigation2": content->ctaNavigation2,
      "supportingNote": content->supportingNote,
      layout, 
      intent
    }` as const;

export default  splitCtaSectionFragment;