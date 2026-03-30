import React from "react";
import Image from "next/image";

import Stack from "@/components/layout/Stack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { UserStorySection, UserStoryInstance } from "@/sanity/types";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";

import CUSTOMER_STORY_CONTENT from "@/features/marketing/components/customerStory/customerStory.copy";
import { urlFor } from "@/sanity/lib/image";

const PLACE_HOLDER_IMAGE_PATH = "/images/placeholder_image_3.png";

interface StoryImageProps {
  storyImage: UserStoryInstance["userStoryImage"];
  storyText: UserStoryInstance["storyText"];
}

type CustomerStoryProps = {
  headlineTitle: UserStorySection["title"];
  headlineText: UserStorySection["subtext"];
  image: UserStorySection["headlineImage"];
  customerStoryBlocks: UserStorySection["storyBlocks"];
};

type StoryImageHeadlineProps = Omit<CustomerStoryProps, "customerStoryBlocks">;

function StoryImageHeadline({
  image,
  headlineTitle,
  headlineText,
}: StoryImageHeadlineProps) {
  return (
    <div className="relative md:h-100">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={urlFor(image.image).url()}
          alt={"Empty placeholder image"}
          fill
          className={"aspect-video object-cover"}
        />
      </div>
      <Container className="relative z-10 h-full py-16">
        <Stack gap="sm" className="h-full justify-center text-background">
          <h2 className="font-display text-5xl">{headlineTitle}</h2>
          <p className={"text-2xl"}>{headlineText}</p>
        </Stack>
      </Container>
    </div>
  );
}

// Images have overlays that have titles,
function StoryImage({ storyImage, storyText }: StoryImageProps) {
  return (
    <div className={"relative md:h-200"}>
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={urlFor(storyImage.image).url()}
          alt={"Empty placeholder image"}
          fill
          className={"aspect-video object-cover"}
        />
      </div>

      <Container className={"relative z-10 flex h-full items-center"}>
        <h3 className="font-display text-5xl leading-relaxed whitespace-pre-wrap text-white">
          {storyText}
        </h3>
      </Container>
    </div>
  );
}

function CustomerStory({
  headlineTitle,
  headlineText,
  image,
  customerStoryBlocks,
}: CustomerStoryProps) {
  return (
    <Section className={"w-full"} paddingY="none">
      <StoryImageHeadline
        headlineTitle={headlineTitle || "Default Title"}
        image={image}
        headlineText={headlineText}
      />
      {customerStoryBlocks &&
        customerStoryBlocks.length > 0 &&
        customerStoryBlocks.map((storyBlock) => (
          <StoryImage
            key={storyBlock._key}
            storyImage={storyBlock.userStoryImage}
            storyText={storyBlock.storyText}
          />
        ))}
    </Section>
  );
}

export default CustomerStory;
