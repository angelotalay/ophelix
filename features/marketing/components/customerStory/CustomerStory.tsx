import React from "react";
import Image from "next/image";

import Stack from "@/components/layout/Stack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";

import CUSTOMER_STORY_CONTENT from "@/features/marketing/components/customerStory/customerStory.copy";

const PLACE_HOLDER_IMAGE_PATH = "/images/placeholder_image_3.png";

interface StoryImageProps {
  src: string;
  titles: string[];
}

type StoryImageHeadlineProps = Omit<BaseHeadlineCTAProps, "tag"> & {
  src: string;
};

function StoryImageHeadline({
  src = PLACE_HOLDER_IMAGE_PATH,
  title = "",
  text,
}: StoryImageHeadlineProps) {
  return (
    <div className="relative md:h-100">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={src}
          alt={"Empty placeholder image"}
          fill
          className={"aspect-video object-cover"}
        />
      </div>
      <Container className="relative z-10 h-full py-16">
        <Stack gap="sm" className="h-full justify-center text-background">
          <h2 className="font-display text-5xl">{title}</h2>
          <p className={"text-2xl"}>{text}</p>
        </Stack>
      </Container>
    </div>
  );
}

// Images have overlays that have titles,
function StoryImage({
  src = PLACE_HOLDER_IMAGE_PATH,
  titles,
}: StoryImageProps) {
  return (
    <div className={"relative md:h-200"}>
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={src}
          alt={"Empty placeholder image"}
          fill
          className={"aspect-video object-cover"}
        />
      </div>

      <Container className={"relative z-10 h-full"}>
        <Stack
          className="h-full justify-center font-display text-5xl text-background"
          gap="sm"
        >
          {titles.map((text) => (
            <h2 key={text}>{text}</h2>
          ))}
        </Stack>
      </Container>
    </div>
  );
}

function CustomerStory() {
  return (
    <Section className={"w-full"} paddingY="none">
      <StoryImageHeadline
        title={"What's The Real Risk After You Buy?"}
        src={PLACE_HOLDER_IMAGE_PATH}
        text={"An everyday watch. A real warranty. A fast repair path."}
      />
      {CUSTOMER_STORY_CONTENT.map((item, idx) => (
        <StoryImage
          src={"/images/placeholder_image_3.png"}
          key={idx}
          titles={item.title.map((title) => title)}
        />
      ))}
    </Section>
  );
}

export default CustomerStory;
