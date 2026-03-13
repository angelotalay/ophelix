import { type SchemaTypeDefinition } from "sanity";
import companyDocumentType from "@/sanity/schemaTypes/documents/companyDocumentType";
import addressObjectType from "@/sanity/schemaTypes/objects/addressObjectType";
import socialMediaObjectType from "@/sanity/schemaTypes/objects/socialMediaObjectType";
import heroObjectType from "@/sanity/schemaTypes/objects/heroObjectType";
import pageDocumentType from "@/sanity/schemaTypes/documents/pageDocumentType";
import navigationObjectType from "@/sanity/schemaTypes/objects/navigationObjectType";
import splitCtaObjectType from "@/sanity/schemaTypes/objects/splitCtaObjectType";
import ctaObjectType from "@/sanity/schemaTypes/objects/ctaObjectType";
import {userStoryInstanceObjectType, userStoryObjectType} from "@/sanity/schemaTypes/objects/userStoryObjectType";
import testimonialObjectType from "@/sanity/schemaTypes/objects/testimonial";
import footerDocumentType from "@/sanity/schemaTypes/documents/footerDocumentType";
import navigationHeaderDocument from "@/sanity/schemaTypes/documents/navigationHeaderDocument";

type arraySanityTypes = Array<SchemaTypeDefinition>;

const documentTypes: arraySanityTypes = [pageDocumentType,
  companyDocumentType, footerDocumentType, navigationHeaderDocument

]

const pageSections: arraySanityTypes = [heroObjectType, splitCtaObjectType, ctaObjectType, userStoryObjectType, userStoryInstanceObjectType, testimonialObjectType];

const informationTypes: arraySanityTypes = [
  addressObjectType,
  socialMediaObjectType,
  navigationObjectType
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...informationTypes, ...pageSections, ...documentTypes],
};
