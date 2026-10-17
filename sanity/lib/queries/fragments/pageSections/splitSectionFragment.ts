import imageAssetFragment from "@/sanity/lib/queries/fragments/commonObjects/imageAsset";

const splitSectionColumnFragment = `
{
  _type,
  _key,
  _type == "imageAsset" => ${imageAssetFragment},
  _type == "richText" => {
    ...
  },
  _type == "textColumns" => {
    ...
  },
}
` as const;

const splitSectionFragment = `
{
  _type == "splitSection" => {
    "leftColumn": leftColumn[]${splitSectionColumnFragment},
    "rightColumn": rightColumn[]${splitSectionColumnFragment},
    intent
  }
}
` as const;

export default splitSectionFragment;
