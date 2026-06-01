import React from "react";

import {
  COMMON_OBJECTS,
  OBJECTS} from "@/sanity/schemaTypes/constants";
import {DocumentationPageSectionType} from "@/features/documentation/types";
import FAQSection from "@/features/components/FAQSection";
import RichText from "@/features/components/RichText";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";

function renderComponents(section: DocumentationPageSectionType) {
  switch (section._type) {
    case COMMON_OBJECTS.richText:
      if (!section.richText) return null;
      return (
        <Container key={section._key} className="w-full">
          <Stack orientation="vertical" gap="md">
            <RichText key={section._key} richTextContent={section.richText} />
          </Stack>
        </Container>
      );
    case OBJECTS.faqSection:
      return (
        <FAQSection
          key={section._key}
          title={section.title}
          text={section.text}
          faqItems={section.faqItems}
          navigation={section.navigation}
        />
      );
  }
}

export default renderComponents;
