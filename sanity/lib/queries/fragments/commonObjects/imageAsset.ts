 const imageAssetFragment = `
{
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
 `;

export default imageAssetFragment;