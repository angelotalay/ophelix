import React from "react";
import Image from "next/image";

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
import { Carousel as CarouselType } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

interface CarouselHeadlineProps {
  headline: CarouselType["headline"];
  subtext: CarouselType["headlineSubText"];
  carouselImages: CarouselType["carouselImages"];
}
type CarouselImageItem = NonNullable<CarouselType["carouselImages"]>[number];

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
