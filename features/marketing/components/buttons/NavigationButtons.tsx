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
  if (navigationButton1 && navigationButton2) {
    return (
      <>
        <RoundedButton size={size} intent={intent1} variant={variant}>
          {navigationButton1.title}
        </RoundedButton>
        <RoundedButton size={size} intent={intent2} variant={variant}>
          {navigationButton2.title}
        </RoundedButton>
      </>
    );
  }

  if (navigationButton1) {
    return (
      <RoundedButton size={size} intent={intent1} variant={variant}>
        {navigationButton1.title}
      </RoundedButton>
    );
  }

  if (navigationButton2) {
    return (
      <RoundedButton size={size} intent={intent2} variant={variant}>
        {navigationButton2.title}
      </RoundedButton>
    );
  }
}

export default NavigationButtons;
