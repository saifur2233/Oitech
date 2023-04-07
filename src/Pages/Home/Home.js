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
import CompareServiceSection from "./CompareServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <SpecialitiesSection></SpecialitiesSection>
      <CompareServiceSection></CompareServiceSection>
      <StatsSection></StatsSection>
      <ClientSection></ClientSection>
      <FaqSection></FaqSection>
      <QuestionSection></QuestionSection>
      <TeamSection></TeamSection>
      <OfficeLocationSection></OfficeLocationSection>
    </div>
  );
};

export default Home;
