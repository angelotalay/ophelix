import React from "react";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";

const roundedButtonVariants = cva("rounded-full", {
  variants: {
    intent: {
      primary: "bg-primary text-primary-foreground",
      background: "bg-background text-foreground border-foreground",
      secondary: "bg-secondary text-secondary-foreground",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export type RoundedButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
} & VariantProps<typeof roundedButtonVariants>;

function RoundedButton({
  children,
  className,
  size = "sm",
  variant = "default",
  intent = "primary",
}: RoundedButtonProps) {
  return (
    <Button
      className={roundedButtonVariants({ intent, className })}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
}

export default RoundedButton;
