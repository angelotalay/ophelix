import { cva,  } from "class-variance-authority";

const DEFAULT_INTENT = {
  variants: {
    intent: {
      primary: "bg-primary",
      muted: "bg-muted",
      neutral: "bg-neutral",
      white: "bg-white",
      dark: "bg-dark",
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
} as const;

function intentVariants(defaultStyles: string) {
  return cva(defaultStyles, DEFAULT_INTENT);
}

export default intentVariants;
