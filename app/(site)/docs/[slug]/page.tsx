import React from "react";
import { DocumentationPageQueryResult } from "@/sanity/types";
import getDocumentationPageQueryResult from "@/sanity/lib/fetch/documentationPage";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import { OphelixShort } from "@/components/icons/OphelixLogo";
import renderComponents from "@/features/pageBuilder/documentationPageBuilder";
import { DocumentationPageSectionType } from "@/features/documentation/types";

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const documentationPageQueryResult: DocumentationPageQueryResult =
    await getDocumentationPageQueryResult({ slug });

  // We need an error boundary here// Basic guard clause
  if (!documentationPageQueryResult?.pageSections) {
    return null; // Or a 404/Error view
  };
  const title = documentationPageQueryResult.title;
  const text = documentationPageQueryResult.text;
  const pageSections = documentationPageQueryResult.pageSections;

  return (
    <main className="py-20">
      <Stack orientation="vertical" gap="md" className="items-center justify-center w-full">
        <Container className="py-20">
          <Stack
            orientation="vertical"
            gap="md"
            className="items-center justify-center"
          >
            <OphelixShort className="h-12 w-16" />
            <h1 className="text-5xl">{title}</h1>
            <p>{text}</p>
          </Stack>
        </Container>
        {pageSections.map((section: DocumentationPageSectionType) => renderComponents(section))}
      </Stack>
    </main>
  );
}

export default Page;
