import React from "react";
import Image from "next/image";
import { VariantProps } from "class-variance-authority";

import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { MarketingPageSectionType } from "@/features/marketing/types";
import { FilterByType, Get } from "@sanity/codegen";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/layout/Container";
import RichText from "@/features/common/RichText";
import intentVariants from "@/components/variants/intentVariants";

const splitSectionVariants = intentVariants("");

type SplitSectionType = FilterByType<MarketingPageSectionType, "splitSection">
type SplitSectionProps = {
  leftColumn: Get<SplitSectionType, "leftColumn">
  rightColumn: Get<SplitSectionType, "rightColumn">
} & VariantProps<typeof splitSectionVariants>


function renderContent({item}: {item: Get<SplitSectionType["leftColumn"], number>}){
  switch (item._type) {
    case COMMON_OBJECTS.imageAsset:
      if(item.url){
        return <Image className="h-auto" key={item._key} src={urlFor(item.url).url()} alt={item.alt} width={item.imageDimensions?.width} height={item.imageDimensions?.height} />;
      }
      break;
    case COMMON_OBJECTS.richText:
      if(item.richText){
        return <RichText key={item._key} richTextContent={item.richText}/>;
      }
      break;
    case COMMON_OBJECTS.textColumns:
      return (
        <div
          className="grid grid-cols-1 gap-x-4 md:grid-cols-2"
          key={item._key}
        >
          <Stack orientation="vertical" gap="md" className="justify-center">
            {item.leftColumn.map((columnItem) =>
              columnItem.richText ? (
                <RichText
                  richTextContent={columnItem.richText}
                  key={columnItem._key}
                />
              ) : null,
            )}
          </Stack>
          <Stack orientation="vertical" gap="md" className="justify-center">
            {item.leftColumn.map((columnItem) =>
              columnItem.richText ? (
                <RichText
                  richTextContent={columnItem.richText}
                  key={columnItem._key}
                />
              ) : null,
            )}
          </Stack>
        </div>
      );


  }
}

function SplitSection({leftColumn, rightColumn, intent}: SplitSectionProps) {
  return (
    <Section as="section" paddingY="md" className={splitSectionVariants({ intent })} >
      <Container data-intent={intent}>
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <Stack orientation="vertical" className="justify-center">
            {leftColumn.map((item) => renderContent({ item }))}
          </Stack>
          <Stack orientation="vertical" className="justify-center">
            {rightColumn.map((item) => renderContent({ item }))}
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

export default SplitSection;