import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {FilterByType, Get} from "@sanity/codegen";

import Stack from "@/components/layout/Stack";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { MarketingPageSectionType } from "@/features/marketing/types";


type UserStorySectionType = FilterByType<MarketingPageSectionType, "userStorySection">;
type UserStoryInstanceType = Get<UserStorySectionType, "storyBlocks", number>;

interface UserStoryProps  {
  headlineTitle : UserStorySectionType["title"];
  headlineText : UserStorySectionType["subtext"];
  headlineImage: UserStorySectionType["headlineImage"];
  userStoryBlocks : UserStoryInstanceType[];
}

type StoryImageHeadlineProps = Omit<UserStoryProps, "userStoryBlocks">;

function StoryImageHeadline({
  headlineImage,
  headlineTitle,
  headlineText,
}: StoryImageHeadlineProps) {
  return (
    <div className="relative md:h-100">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={urlFor(headlineImage.image).url()}
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
function StoryImage({ userStoryImage, storyText }: Omit<UserStoryInstanceType, "_key" | "_type">) {
  return (
    <div className={"relative md:h-200"}>
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={urlFor(userStoryImage.image).url()}
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
  headlineImage,
  userStoryBlocks,
}: UserStoryProps) {
  return (
    <Section className={"w-full"} paddingY="none">
      <StoryImageHeadline
        headlineTitle={headlineTitle}
        headlineImage={headlineImage}
        headlineText={headlineText}
      />
      {userStoryBlocks &&
        userStoryBlocks.length > 0 &&
        userStoryBlocks.map((storyBlock) => (
          <StoryImage
            key={storyBlock._key}
            userStoryImage={storyBlock.userStoryImage}
            storyText={storyBlock.storyText}
          />
        ))}
    </Section>
  );
}

export default CustomerStory;
