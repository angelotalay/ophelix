import heroSectionFragment from "@/sanity/lib/queries/fragments/pageSections/heroSectionFragment";
import splitSectionFragment from "@/sanity/lib/queries/fragments/pageSections/splitSectionFragment";
import ctaSectionFragment from "@/sanity/lib/queries/fragments/pageSections/ctaSectionFragment";

const marketingPageContentFragment: string = `{
    _type,
    _key,
    _type == "heroSection" => ${heroSectionFragment},
    _type == "splitSection" => ${splitSectionFragment}, 
_type == "imageAsset" => {
  ...,
  image
},
  _type == "userStorySection" => {
    ...
  }, 
  _type == "carousel" => {
    ...
  }, 
  _type == "testimonialsSection" => {
    ...
  }, 
  _type == "ctaSection" => ${ctaSectionFragment}
  }
`;

export default marketingPageContentFragment