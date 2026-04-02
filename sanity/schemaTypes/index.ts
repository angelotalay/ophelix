import { type SchemaTypeDefinition } from "sanity";
import companyDocumentType from "@/sanity/schemaTypes/documents/companyDocumentType";
import addressObjectType from "@/sanity/schemaTypes/objects/common/addressObjectType";
import socialMediaObjectType from "@/sanity/schemaTypes/objects/common/socialMediaObjectType";
import heroObjectType from "@/sanity/schemaTypes/objects/heroObjectType";
import pageDocumentType from "@/sanity/schemaTypes/documents/pageDocumentType";
import navigationLinkObjectType from "@/sanity/schemaTypes/objects/common/navigationLinkObjectType";
import footerDocumentType from "@/sanity/schemaTypes/documents/footerDocumentType";
import navigationHeaderDocument from "@/sanity/schemaTypes/documents/navigationHeaderDocument";
import siteSettingsDocumentType from "@/sanity/schemaTypes/documents/siteSettingsDocumentType";
import richTextObjectType from "@/sanity/schemaTypes/objects/common/richTextObjectType";
import imageAssetObjectType from "@/sanity/schemaTypes/objects/common/imageAssetObjectType";
import testimonialDocumentType from "@/sanity/schemaTypes/documents/testimonialDocumentType";
import ctaDocumentType from "@/sanity/schemaTypes/documents/ctaDocumentType";
import userStoryDocumentType from "@/sanity/schemaTypes/documents/userStoryDocumentType";
import userStoryInstanceObjectType from "@/sanity/schemaTypes/objects/userStoryObjectType";
import splitSectionObjectType from "@/sanity/schemaTypes/objects/splitSectionObjectType";
import HeroDocumentType from "@/sanity/schemaTypes/documents/heroDocumentType";
import alignmentObjectType from "@/sanity/schemaTypes/objects/common/alignmentObjectType";
import ctaSectionObjectType from "@/sanity/schemaTypes/objects/ctaSectionObjectType";
import imageCarouselDocumentType from "@/sanity/schemaTypes/documents/carouselDocumentType";
import testimonialsObjectType from "@/sanity/schemaTypes/objects/testiomonialsObjectType";

type arraySanityTypes = Array<SchemaTypeDefinition>;

// Rather than split by sanity doc/obj type maybe we split by features?
const documentTypes: arraySanityTypes = [
  pageDocumentType,
  companyDocumentType,
  footerDocumentType,
  navigationHeaderDocument,
  siteSettingsDocumentType,
  userStoryDocumentType,
  HeroDocumentType,
  testimonialDocumentType,
  imageCarouselDocumentType,
];

const objectTypes: arraySanityTypes = [
  heroObjectType,
  ctaDocumentType,
  userStoryInstanceObjectType,
  splitSectionObjectType,
  ctaSectionObjectType,
  testimonialsObjectType,
];

const commonObjectTypes: arraySanityTypes = [
  addressObjectType,
  socialMediaObjectType,
  navigationLinkObjectType,
  imageAssetObjectType,
  richTextObjectType,
  alignmentObjectType,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...commonObjectTypes, ...objectTypes, ...documentTypes],
};
