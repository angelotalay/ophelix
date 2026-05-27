import React from "react";
import Image from "next/image";


import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { MarketingPageSectionType } from "@/features/marketing/types";
import { FilterByType, Get } from "@sanity/codegen";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Container from "@/components/layout/Container";

type SplitSectionType = FilterByType<MarketingPageSectionType, "splitSection">
type SplitSectionProps = {
  leftColumn: Get<SplitSectionType, "leftColumn">
  rightColumn: Get<SplitSectionType, "rightColumn">
}


// This would be a good spot for error boundaries.
function renderContent({item}: {item: Get<SplitSectionType["leftColumn"], number>}){
  switch (item._type) {
    case COMMON_OBJECTS.imageAsset:
      if(item.url){
        return <Image className="h-auto" key={item._key} src={urlFor(item.url).url()} alt={item.alt} width={item.imageDimensions?.width} height={item.imageDimensions?.height} />;
      }
      break;
    case COMMON_OBJECTS.richText:
      if(item.richText){
        return <PortableText key={item._key} value={item.richText} />;
      }
      break;
    case COMMON_OBJECTS.textColumns:
      return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4" key={item._key}>
          <Stack orientation="vertical" gap="md" className="justify-center">
            {item.leftColumn.map((columnItem) => <PortableText key={columnItem._key} value={columnItem.richText}/>)}
          </Stack>
          <Stack orientation="vertical" gap="md" className="justify-center">
            {item.rightColumn.map((columnItem) => <PortableText key={columnItem._key} value={columnItem.richText}/>)}
          </Stack>
        </div>
      )


  }
}

function SplitSection({leftColumn, rightColumn}: SplitSectionProps) {
  return (
    <Section as="section" paddingY="md" className="">
      <Container>
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