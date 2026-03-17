import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const stackVariants = cva("flex", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      none: "",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    gap: "md",
    orientation: "vertical",
  },
});

type StackProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof stackVariants> & {
    children: React.ReactNode;
  };

/**
 * Layout element that deals alignment and orientation using flex-box
 */
function Stack({
  children,
  gap,
  orientation,
  className,
  ...props
}: StackProps) {
  return (
    <div className={stackVariants({ orientation, gap, className })} {...props}>
      {children}
    </div>
  );
}

export default Stack;
