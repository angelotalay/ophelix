import imageAssetFragment from "@/sanity/lib/queries/fragments/commonObjects/imageAsset";

const splitSectionFragment = `
{
  _type == "splitSection" => {
    "leftColumn": leftColumn[]{
      _type,
      _key,
      _type == "imageAsset" => ${imageAssetFragment},
      _type == "richText" => {
        ...
      }
    },
    "rightColumn": rightColumn[]{
      _type,
      _key,
      _type == "imageAsset" => ${imageAssetFragment},
      _type == "richText" => {
        ...
      }
    }
  }
}
`;

export default splitSectionFragment;
