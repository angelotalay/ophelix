import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

interface FeatureImageProps {
  src?: string; //For now this will be a src string - we will integrate with a cms later
  color: "primary" | "background"; // We should put this into a types file as we are referencing it a lot
  className?: string;
}
function FeatureImage({
  src = "/images/placeholder_image_1.png",
  color = "background",
  className,
}: FeatureImageProps) {
  return (
    <div
      className={cn(className, {
        "bg-primary text-primary-foreground": color === "primary",
        "bg-background text-primary": color === "background",
      })}
    >
      <Container className={"py-16"}>
        <div className={"relative"}>
          <Image
            src={src}
            alt={"Placeholder image of the ophelix watch"}
            className={"object-contain"}
            width={1280}
            height={738}
          />
        </div>
      </Container>
    </div>
  );
}

export default FeatureImage;
