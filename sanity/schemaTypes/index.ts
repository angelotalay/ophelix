import { type SchemaTypeDefinition } from "sanity";
import companyDocumentType from "@/sanity/schemaTypes/documents/content/companyDocumentType";
import addressObjectType from "@/sanity/schemaTypes/objects/common/addressObjectType";
import socialMediaObjectType from "@/sanity/schemaTypes/objects/common/socialMediaObjectType";
import heroObjectType from "@/sanity/schemaTypes/objects/heroObjectType";
import marketingPageDocumentType from "@/sanity/schemaTypes/documents/pages/marketingPageDocumentType";
import navigationLinkObjectType from "@/sanity/schemaTypes/objects/common/navigationLinkObjectType";
import footerDocumentType from "@/sanity/schemaTypes/documents/content/footerDocumentType";
import navigationHeaderDocument from "@/sanity/schemaTypes/documents/content/navigationHeaderDocument";
import siteSettingsDocumentType from "@/sanity/schemaTypes/documents/siteSettingsDocumentType";
import richTextObjectType from "@/sanity/schemaTypes/objects/common/richTextObjectType";
import imageAssetObjectType from "@/sanity/schemaTypes/objects/common/imageAssetObjectType";
import testimonialDocumentType from "@/sanity/schemaTypes/documents/content/testimonialDocumentType";
import ctaDocumentType from "@/sanity/schemaTypes/documents/content/ctaDocumentType";
import userStoryDocumentType from "@/sanity/schemaTypes/documents/content/userStoryDocumentType";
import userStoryInstanceObjectType from "@/sanity/schemaTypes/objects/userStoryObjectType";
import splitCtaSectionObjectType from "@/sanity/schemaTypes/objects/splitCtaSectionObjectType";
import HeroDocumentType from "@/sanity/schemaTypes/documents/content/heroDocumentType";
import ctaSectionObjectType from "@/sanity/schemaTypes/objects/ctaSectionObjectType";
import testimonialsObjectType from "@/sanity/schemaTypes/objects/testiomonialsObjectType";
import headlineObjectType from "@/sanity/schemaTypes/objects/headlineObjectType";
import splitSectionObjectType from "@/sanity/schemaTypes/objects/splitSectionObjectType";
import carouselSectionObjectType from "@/sanity/schemaTypes/objects/carouselSectionObjectType";

type arraySanityTypes = Array<SchemaTypeDefinition>;

// Rather than split by sanity doc/obj type maybe we split by features?
const documentTypes: arraySanityTypes = [
  marketingPageDocumentType,
  companyDocumentType,
  footerDocumentType,
  navigationHeaderDocument,
  siteSettingsDocumentType,
  userStoryDocumentType,
  HeroDocumentType,
  testimonialDocumentType,
];

const objectTypes: arraySanityTypes = [
  heroObjectType,
  ctaDocumentType,
  userStoryInstanceObjectType,
  splitCtaSectionObjectType,
  ctaSectionObjectType,
  testimonialsObjectType,
  headlineObjectType,
  splitSectionObjectType,
  carouselSectionObjectType
];

const commonObjectTypes: arraySanityTypes = [
  addressObjectType,
  socialMediaObjectType,
  navigationLinkObjectType,
  imageAssetObjectType,
  richTextObjectType,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...commonObjectTypes, ...objectTypes, ...documentTypes],
};
