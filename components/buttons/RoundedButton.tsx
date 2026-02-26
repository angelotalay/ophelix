import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RoundedButtonProps = {
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
  color?: "primary" | "background" | "secondary";
};

function RoundedButton({
  children,
  className,
  size = "sm",
  variant = "default",
  color = "primary",
}: RoundedButtonProps) {
  return (
    <Button
      className={cn(className, "rounded-full", {
        "bg-primary text-primary-foreground": color === "primary",
        "border-foreground bg-background text-foreground":
          color === "background",
      })}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
}

export default RoundedButton;
