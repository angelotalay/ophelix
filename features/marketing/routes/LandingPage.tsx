import React from "react";
import Hero from "@/features/marketing/components/Hero";
import FeatureImage from "@/features/marketing/components/FeatureImage";
import SplitCTA from "@/features/marketing/components/SplitCTA";

function LandingPage() {
  return (
    // The div here should probably be a Section component
    <div>
      <Hero />
      <FeatureImage color={"background"} />
      <SplitCTA />
    </div>
  );
}

export default LandingPage;
