import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";

interface PageHeroProps {
  title: string;
  text: string;
  src?: string;
}

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";

function PageHero({
  title,
  src = PLACEHOLDER_IMAGE_PATH,
  text,
}: PageHeroProps) {
  return (
    <Container className="md:h-175">
      <div className="relative h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={src}
            fill
            alt={title}
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-2 text-background">
          <h1 className="font-display text-5xl">{title}</h1>
          <p className="text-center text-2xl">{text}</p>
        </div>
      </div>
    </Container>
  );
}

export default PageHero;
