const productSpecificationFragment = `
  {
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
` as const;

export default productSpecificationFragment;
