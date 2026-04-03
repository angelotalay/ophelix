import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structureResolver: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.divider().title("Website Content"),
      S.documentTypeListItem("page").title("Website Pages"),
      S.documentTypeListItem("footer").title("Footer Content"),
      S.documentTypeListItem("navigationHeader").title("Navbar Header"),
      S.divider().title("Settings"),
      S.documentTypeListItem("siteSettings")
        .title("Website Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
      S.documentTypeListItem("company")
        .title("Company Details")
        .child(
          S.editor().id("company").schemaType("company").documentId("company"),
        ),
    ]);
