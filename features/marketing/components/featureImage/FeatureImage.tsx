import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { urlFor } from "@/sanity/lib/image";
import { Get,FilterByType} from "@sanity/codegen";
import { MarketingPageSectionType } from "@/features/marketing/types";

type FeatureImageSection = FilterByType<MarketingPageSectionType, "imageAsset">

interface FeatureImageProps {
  image: Get<FeatureImageSection, "image">;
  className?: string;
}
function FeatureImage({ image, className }: FeatureImageProps) {
  return (
    <Section paddingY="md" className={className}>
      <Container>
        <div className={"relative"}>
          <Image
            src={urlFor(image).url()}
            alt={"Placeholder image of the ophelix watch"}
            className={"object-contain"}
            width={1280}
            height={738}
          />
        </div>
      </Container>
    </Section>
  );
}

export default FeatureImage;
