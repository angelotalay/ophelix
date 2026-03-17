"use client";

import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    paddingY: {
      sm: "py-12",
      md: "py-16",
      lg: "py-24",
      none: "",
    },
  },
  defaultVariants: {
    paddingY: "md",
  },
});

type SectionProps = {
  children: React.ReactNode;
  as?: "section" | "div" | "article";
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants>;

/**
 * Layout element that deals vertical padding for page regions.
 */
function Section({
  children,
  as: Component = "section",
  className,
  paddingY,
  ...props
}: SectionProps) {
  return (
    <Component className={sectionVariants({ paddingY, className })} {...props}>
      {children}
    </Component>
  );
}

export default Section;
