import { type SchemaTypeDefinition } from "sanity";
import { companyType } from "@/sanity/schemaTypes/documents/companyType";
import addressType from "@/sanity/schemaTypes/objects/addressType";
import socialMediaType from "@/sanity/schemaTypes/objects/socialMediaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [companyType, addressType, socialMediaType],
};
