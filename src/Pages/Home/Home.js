import React from "react";
import ClientSection from "./ClientSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import OfficeLocationSection from "./OfficeLocationSection";
import QuestionSection from "./QuestionSection";
import ServiceSection from "./ServiceSection";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import SpecialitiesSection from "./SpecialitiesSection";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <SpecialitiesSection></SpecialitiesSection>
      <StatsSection></StatsSection>
      <ClientSection></ClientSection>
      <FaqSection></FaqSection>
      <TeamSection></TeamSection>
      <QuestionSection></QuestionSection>

      <OfficeLocationSection></OfficeLocationSection>
    </div>
  );
};

export default Home;
