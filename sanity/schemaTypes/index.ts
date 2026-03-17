import { type SchemaTypeDefinition } from "sanity";
import companyDocumentType from "@/sanity/schemaTypes/documents/companyDocumentType";
import addressObjectType from "@/sanity/schemaTypes/objects/addressObjectType";
import socialMediaObjectType from "@/sanity/schemaTypes/objects/socialMediaObjectType";
import heroObjectType from "@/sanity/schemaTypes/objects/heroObjectType";
import pageDocumentType from "@/sanity/schemaTypes/documents/pageDocumentType";
import navigationLinkObjectType from "@/sanity/schemaTypes/objects/navigationLinkObjectType";
import splitCtaObjectType from "@/sanity/schemaTypes/objects/splitCtaObjectType";
import ctaObjectType from "@/sanity/schemaTypes/objects/ctaObjectType";
import {
  userStoryInstanceObjectType,
  userStoryObjectType,
} from "@/sanity/schemaTypes/objects/userStoryObjectType";
import testimonialObjectType from "@/sanity/schemaTypes/objects/testimonialObjectType";
import footerDocumentType from "@/sanity/schemaTypes/documents/footerDocumentType";
import navigationHeaderDocument from "@/sanity/schemaTypes/documents/navigationHeaderDocument";
import siteSettingsDocumentType from "@/sanity/schemaTypes/documents/siteSettingsDocumentType";
import richTextObjectType from "@/sanity/schemaTypes/objects/richTextObjectType";
import imageAssetObjectType from "@/sanity/schemaTypes/objects/imageAssetObjectType";
import imageCarouselObjectType from "@/sanity/schemaTypes/objects/imageCarouselObjectType";

type arraySanityTypes = Array<SchemaTypeDefinition>;

const documentTypes: arraySanityTypes = [
  pageDocumentType,
  companyDocumentType,
  footerDocumentType,
  navigationHeaderDocument,
  siteSettingsDocumentType,
];

const pageSections: arraySanityTypes = [
  heroObjectType,
  splitCtaObjectType,
  ctaObjectType,
  userStoryObjectType,
  userStoryInstanceObjectType,
  testimonialObjectType,
  richTextObjectType,
  imageAssetObjectType,
  imageCarouselObjectType,
];

const informationTypes: arraySanityTypes = [
  addressObjectType,
  socialMediaObjectType,
  navigationLinkObjectType,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...informationTypes, ...pageSections, ...documentTypes],
};
