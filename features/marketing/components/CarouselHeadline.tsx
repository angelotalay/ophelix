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

function CarouselHeadline() {
  return (
    <Container className="flex flex-col gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h2 className="font-display text-5xl">Headline</h2>
        <p> Watches built for moments. </p>
      </div>
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
    </Container>
  );
}

export default CarouselHeadline;
