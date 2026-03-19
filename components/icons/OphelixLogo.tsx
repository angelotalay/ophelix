import React from "react";
import OphelixLogoFull from "@/assets/ophelix_transparent_full.svg";
import OphelixLogoShort from "@/assets/ophelix_transparent_x.svg";
import OphelixLogoText from "@/assets/ophelix_transparent_text.svg";

type LogoProps = {
  className?: string;
};

function OphelixFull({ className }: { className?: string }) {
  return (
    <OphelixLogoFull
      className={"block w-auto sm:h-8 md:h-12" + { className }}
      aria-label="Ophelix"
    />
  );
}

function OphelixText() {
  return <OphelixLogoText className={"block w-auto md:h-8"} />;
}

function OphelixShort({ className }: LogoProps) {
  return <OphelixLogoShort className={className} />;
}

export { OphelixFull, OphelixShort, OphelixText };
