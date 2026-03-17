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

const DEFAULT_CAROUSEL_IMAGE_PATH = "/images/placeholder_image_1.png";

function CarouselImage({
  src = DEFAULT_CAROUSEL_IMAGE_PATH,
}: {
  src?: string;
}) {
  return (
    <CarouselItem>
      <Image
        src={src}
        height={738}
        width={1280}
        className={"aspect-video rounded-md object-cover"}
        alt="Watch placeholder image"
      />
    </CarouselItem>
  );
}

// For now we expose className to change the section colour. Once the designer has used this for other colours we then include variants
function CarouselHeadline({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <Container>
        <Stack>
          <Stack className="w-full items-center justify-center" gap="sm">
            <h2 className="font-display text-5xl">Headline</h2>
            <p> Watches built for moments. </p>
          </Stack>
          <div>
            <Carousel
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselImage />
                <CarouselImage />
                <CarouselImage />
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
