const splitSectionFragment: string = `{
      "eyebrow": content->eyebrow,
      "title": content->title,
      "ctaText": content->text,
      ctaImage,
      "ctaNavigation1": content->ctaNavigation1,
      "ctaNavigation2": content->ctaNavigation2,
      "supportingNote": content->supportingNote,
      layout, 
      intent
    }`;

export default  splitSectionFragment;