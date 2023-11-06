import Layout from '@components/Layout/Layout';
import HomeHeroSection from "@sections/HomeHeroSection/HomeHeroSection";
import CtaSection from "@sections/CtaSection/CtaSection";
import IntroductionSection from "@sections/IntroductionSection/IntroductionSection";
import NewsletterSection from '@sections/NewsletterSection/NewsletterSection';
import WhyUsSection from "@sections/WhyUsSection/WhyUsSection";
import DiscoverAppSection from "@sections/DiscoverAppSection/DiscoverAppSection";
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
    <Layout>
      <HomeHeroSection />
      <CtaSection />
      <IntroductionSection /> 
      <NewsletterSection />
      <WhyUsSection /> 
      <DiscoverAppSection />
      <CtaSection />
      <ServicesSection />
      <TechnologiesSection />
      <CtaSection />
      <FaqSection />  
    </Layout>
  );
}