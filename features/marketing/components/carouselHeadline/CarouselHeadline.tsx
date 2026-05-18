import React from "react";
import Image from "next/image";
import type {FilterByType, Get} from "@sanity/codegen";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import Section from "@/components/layout/Section";
import { urlFor } from "@/sanity/lib/image";
import { MarketingPageSectionType } from "@/features/marketing/types";

type CarouselHeadlineSectionType = FilterByType<MarketingPageSectionType, "carouselSection">;
type CarouselImageItem = Get<CarouselHeadlineSectionType, "carouselImages", number>;

interface CarouselHeadlineProps {
  headline: CarouselHeadlineSectionType["headline"];
  subtext: CarouselHeadlineSectionType["headlineSubText"];
  carouselImages: CarouselHeadlineSectionType["carouselImages"];
}
function CarouselImage({ item }: { item: CarouselImageItem }) {
  return (
    <CarouselItem>
      <Image
        src={urlFor(item.image).url()}
        height={738}
        width={1280}
        className={"aspect-video rounded-md object-cover"}
        alt="Watch placeholder image"
      />
    </CarouselItem>
  );
}

// For now we expose className to change the section colour. Once the designer has used this for other colours we then include variants
function CarouselHeadline({
  headline,
  subtext,
  carouselImages,
}: CarouselHeadlineProps) {
  return (
    <Section>
      <Container>
        <Stack gap="lg">
          <Stack className="w-full items-center justify-center" gap="md">
            <h2 className="font-display text-5xl"> {headline} </h2>
            {subtext && <p>{subtext}</p>}
          </Stack>
          <div>
            <Carousel
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages &&
                  carouselImages.length > 0 &&
                  carouselImages.map((item) => (
                    <CarouselImage key={item._key} item={item} />
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

export default CarouselHeadline;
