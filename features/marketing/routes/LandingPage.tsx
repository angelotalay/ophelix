import React from "react";
import Hero from "@/features/marketing/components/Hero";
import FeatureImage from "@/features/marketing/components/FeatureImage";

function LandingPage() {
  return (
    <div className={""}>
      <Hero />
      <FeatureImage color={"background"} />
    </div>
  );
}

export default LandingPage;
