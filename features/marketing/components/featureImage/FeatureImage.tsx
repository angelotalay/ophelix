import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { ImageAsset } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

interface FeatureImageProps {
  image: ImageAsset["image"];
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
