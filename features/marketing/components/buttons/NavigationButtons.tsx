import RoundedButton, {
  RoundedButtonProps,
} from "@/components/buttons/RoundedButton";
import React from "react";

import { Navigation } from "@/sanity/types";

interface NavigationButtonPairProps {
  navigationButton1: Navigation | null;
  navigationButton2: Navigation | null;

  size: RoundedButtonProps["size"];
  intent1: RoundedButtonProps["intent"];
  intent2: RoundedButtonProps["intent"];
  variant?: RoundedButtonProps["variant"];
}

function NavigationButtons({
  navigationButton1,
  navigationButton2,
  size = "default",
  intent1 = "primary",
  intent2 = "primary",
  variant,
}: NavigationButtonPairProps) {
  // Extract active buttons and render through map
  const buttons = [navigationButton1,navigationButton2].filter(Boolean)
  if(!buttons) return;

  return(
    <>
      {buttons.map((button, index) =>
      <RoundedButton key={button?.title} size={size} intent={index == 0 ? intent1  : intent2} variant={variant}>
        {button?.title}
      </RoundedButton>
      )}
    </>
  )

}

export default NavigationButtons;
