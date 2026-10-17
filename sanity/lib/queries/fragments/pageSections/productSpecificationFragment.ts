import { defineQuery } from "next-sanity";

const productSpecificationQuery = defineQuery(`
  *[_type == "productSpecification"][0] {
    _id,
    title,
    text,
    specificationItems[] {
      _key,
      _type,
      title,
      text,
      direction,
      image {
        alt,
        caption,
        attribution,
        "url": image.asset->url,
        "imageDimensions": image.asset->metadata.dimensions {
          width,
          height,
          aspectRatio
        }
      }
    }
  }
`);

export default productSpecificationQuery;
