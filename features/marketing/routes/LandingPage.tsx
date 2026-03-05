import React from "react";
import Hero from "@/features/marketing/components/Hero";
import FeatureImage from "@/features/marketing/components/FeatureImage";
import SplitCTA from "@/features/marketing/components/SplitCTA";

function LandingPage() {
  return (
    // The div here should probably be a Section component
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <FeatureImage color={"background"} />
      </div>
      <div className="w-full">
        <SplitCTA intent={"primary"} />
      </div>
      <div className={"w-full bg-extra-dark"}>
        <SplitCTA intent={"extra-dark"} />
      </div>
    </div>
  );
}

export default LandingPage;
