import React from "react";
import Marquee from "react-fast-marquee";
import ANNOUNCEMENT_TEXT from "@/features/marketing/components/announcementBar/announcement.copy";

function MarqueeAnnouncementBar() {
  return (
    <Marquee
      autoFill
      className={
        "flex w-full flex-row bg-extra-dark py-2 text-extra-dark-foreground"
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

export default MarqueeAnnouncementBar;
