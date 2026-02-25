import React from "react";

// This will either be from
const ANNOUNCEMENT_TEXT = [
  {
    label: "✓ 3 Month Money-Back Guarantee",
  },
  {
    label: "✓ 5-Year UK Warranty",
  },
  {
    label: "✓ 30-Day Service Turnaround",
  },
  {
    label: "✓ Direct Human Support",
  },
];

function AnnouncementBar() {
  return (
    <div className={"bg-extra-dark"}>
      <div
        className={
          "bg-extra-dark text-extra-dark-foreground p-2 flex flex-row justify-evenly items-center opx-animate-move-left"
        }
      >
        {ANNOUNCEMENT_TEXT.map((item) => (
          <li key={item.label}>{item.label.toUpperCase()}</li>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementBar;
