import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { clsx } from "clsx";

import { BaseHeadlineCTAProps } from "@/features/marketing/types";

type PageHeroProps = BaseHeadlineCTAProps;

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";

type PageHeroContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

function PageHeroContainer({ children, className }: PageHeroContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl pt-24 pb-8", className)}>
      {children}
    </div>
  );
}

function PageHero({
  title,
  src = PLACEHOLDER_IMAGE_PATH,
  text,
}: PageHeroProps) {
  return (
    <PageHeroContainer className="md:h-175">
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
    </PageHeroContainer>
  );
}

export default PageHero;
