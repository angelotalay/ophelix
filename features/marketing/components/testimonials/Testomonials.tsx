"use client";
import React from "react";

import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import StarIcon from "@/assets/star.svg";

import TESTIMONIALS_CONTENT from "@/features/marketing/components/testimonials/testiomonials.copy";
import Section from "@/components/layout/Section";

interface TestimonialItemProps {
  rating: number;
  review: string;
  name: string;
  occupation: string;
  location: string;
}

function TestimonialItem({
  rating = 5,
  review = TESTIMONIALS_CONTENT[0].review,
  name = TESTIMONIALS_CONTENT[0].name,
  occupation = TESTIMONIALS_CONTENT[0].occupation,
  location = TESTIMONIALS_CONTENT[0].location,
}: TestimonialItemProps) {
  const occupationAndLocation = `${occupation}, ${location}.`;
  return (
    <CarouselItem className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <StarIcon key={index} className={"h-7"} />
        ))}
      </div>
      <div>
        <Stack className={"max-w-4xl"} gap="lg">
          <p className="text-center text-4xl">{review}</p>
          <Stack
            className="items-center justify-center"
            orientation="horizontal"
            gap="sm"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <span className="block">
              <p className="font-semibold">{name}</p>
              <p>{occupationAndLocation}</p>
            </span>
          </Stack>
        </Stack>
      </div>
    </CarouselItem>
  );
}

// Testimonial bg colour exposed via className for now as well
function Testimonials({ className }: { className: string }) {
  return (
    <Section className={className}>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {TESTIMONIALS_CONTENT.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              rating={5}
              review={testimonial.review}
              name={testimonial.name}
              occupation={testimonial.occupation}
              location={testimonial.location}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious size="lg" />
        <CarouselNext size="lg" />
      </Carousel>
    </Section>
  );
}

export default Testimonials;
