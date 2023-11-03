import HomeHeroSection from "@sections/HomeHeroSection/HomeHeroSection";
import CtaSection from "@sections/CtaSection/CtaSection";
import IntroductionSection from "@sections/IntroductionSection/IntroductionSection";
import NewsletterSection from '@sections/NewsletterSection/NewsletterSection';
import WhyUsSection from "@sections/WhyUsSection/WhyUsSection";
import LeaseYourDeveloperSection from "@sections/LeaseYourDeveloperSection/LeaseYourDeveloperSection";
import ServicesSection from "@sections/ServicesSection/ServicesSection";
import TechnologiesSection from "@sections/TechnologiesSection/TechnologiesSection";
import FaqSection from "@sections/FaqSection/FaqSection";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return{
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
}

export default function App() {
  return (
    <div className="App">
      <HomeHeroSection />
      <CtaSection />
      <IntroductionSection /> 
      <NewsletterSection />
      <WhyUsSection /> 
      <LeaseYourDeveloperSection />
      <CtaSection />
      <ServicesSection />
      <TechnologiesSection />
      <CtaSection />
      <FaqSection />  
    </div>
  );
}