import { defineQuery } from "next-sanity";

export const landingPageQuery = defineQuery(`
*[_type == "siteSettings"][0]{
  "pageSections": landingPage->pageSections[]{
    _type,
    _key,
    _type == "heroSection" => {
      "title": hero->title,
      "text": hero->heroText,
      "heroNavigation1": hero->heroNavigation1,
      "heroNavigation2": hero->heroNavigation2,
      "muxVideo": hero->muxVideo {
        "playbackId":asset->playbackId,
      },
      "heroImage": hero->heroImage
    },
    _type == "splitSection" => {
      "eyebrow": content->eyebrow,
      "title": content->title,
      "ctaText": content->text,
      "ctaImage": content->ctaImage,
      "ctaNavigation1": content->ctaNavigation1,
      "ctaNavigation2": content->ctaNavigation2,
      layout, 
      intent
    }, 
_type == "imageAsset" => {
  ...,
  "dimensions": image.asset->metadata.dimensions,
  
},
  _type == "userStorySection" => {
    ...
  }, 
  _type == "carousel" => {
    ...
  }
  }
}
`);
