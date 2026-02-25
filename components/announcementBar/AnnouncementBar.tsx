import React from "react";
import Marquee from "react-fast-marquee";

const ANNOUNCEMENT_TEXT = [
  { label: "✓ 3 Month Money-Back Guarantee" },
  { label: "•" },
  { label: "✓ 5-Year UK Warranty" },
  { label: "•" },
  { label: "✓ 30-Day Service Turnaround" },
  { label: "•" },
  { label: "✓ Direct Human Support" },
  { label: "•" },
];

function MarqueeAnnouncementBar() {
  return (
    <Marquee
      autoFill
      className={
        "flex flex-row bg-extra-dark text-extra-dark-foreground w-full py-2"
      }
      speed={60}
      loop={0}
    >
      {ANNOUNCEMENT_TEXT.map((item, index) => (
        <div key={item.label + index} className={"flex items-center px-4"}>
          <span>{item.label}</span>
        </div>
      ))}
    </Marquee>
  );
}

export { MarqueeAnnouncementBar };
