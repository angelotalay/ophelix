import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import CUSTOMER_STORY_CONTENT from "@/features/marketing/components/customerStory.copy";

const PLACE_HOLDER_IMAGE_PATH = "/images/placeholder_image_3.png";
interface StoryImageProps {
  src: string;
  titles: string[];
}

interface StoryImageHeadlineProps extends Omit<StoryImageProps, "titles"> {
  title: string;
  text: string;
}

function StoryImageHeadline({
  src,
  title = "",
  text,
}: StoryImageHeadlineProps) {
  return (
    <div className="relative md:h-150">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={src}
          alt="Empty placeholder image"
          className={"object-cover"}
          fill
        />
      </div>
      <Container className="relative z-10 flex justify-center font-display text-5xl text-background">
        <h2>{title}</h2>
        <p>{text}</p>
      </Container>
    </div>
  );
}

// Images have overlays that have titles,
function StoryImage({ src, titles }: StoryImageProps) {
  return (
    <div className={"relative md:h-250"}>
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={"/images/placeholder_image_3.png"}
          alt={"Empty placeholder image"}
          fill
        />
      </div>
      <Container
        className={"relative z-10 font-display text-5xl text-background"}
      >
        {titles.map((text) => (
          <h2 key={text}>{text}</h2>
        ))}
      </Container>
    </div>
  );
}

function CustomerStory() {
  return (
    <div className={"w-full"}>
      <StoryImageHeadline
        text={"What's The Real Risk After You Buy?"}
        src={PLACE_HOLDER_IMAGE_PATH}
        title={"An everyday watch. A real warranty. A fast repair path."}
      />
      {CUSTOMER_STORY_CONTENT.map((item, idx) => (
        <StoryImage
          src={"/images/placeholder_image_3.png"}
          key={idx}
          titles={item.title.map((title) => title)}
        />
      ))}
    </div>
  );
}

export default CustomerStory;
