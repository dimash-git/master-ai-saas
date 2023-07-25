import LandingContent from "@/components/Landing/LandingContent";
import LandingHero from "@/components/Landing/LandingHero";
import LandingNavbar from "@/components/Landing/LandingNavbar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
