import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    as: {
      h1: "text-6xl font-semibold",
      h2: "text-5xl font-medium",
      h3: "text-4xl font-medium",
      h4: "text-3xl font-medium",
      h5: "text-2xl font-medium",
      h6: "text-xl font-medium",
    },
    font: {
      body: "",
      display: "font-display",
    },
  },
  defaultVariants: {
    font: "body",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  as: HeadingTag;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof headingVariants>;

function Heading({ as, children, className, font }: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(headingVariants({ as, font }), className)}>
      {children}
    </Component>
  );
}

export default Heading;
