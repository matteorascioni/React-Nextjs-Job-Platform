import React from 'react';
import HeroParticles from "@components/HeroParticles/HeroParticles";
import Headline from "@components/Headline/Headline";
import { useTranslation } from 'next-i18next';

import styles from "./HomeHeroSection.module.css";

const HomeHeroSection = () => {
  const { t } = useTranslation('home');

  return (
    <section 
      id='herosection' 
      className={`
        grid-full-width
        ${styles.container}
      `}
    >
      {/* Content */}
      <div className={styles.content}>
        {/* Headlines container */}
        <div className={styles.headlinesContainer}>
          {/* First Headline */}
          <h1 
            className={`
              ${styles.headline} 
              ${styles.firstHeadline}`
            } 
          >
            {t('home:hero_section_first_headline')}
            {/* First Span */}
            <span className={styles.span}></span>
          </h1>

          {/* Second Headline */}
          <h1 
            className={`
              ${styles.headline} 
              ${styles.secondHeadline}`
            }
          >
            {t('home:hero_section_second_headline')}
            {/* First Span */}
            <span className={styles.span}></span>
          </h1>
        </div>

        {/* SubHeadline */}
        <Headline 
          tagName="h2"
          headline={t('home:hero_section_sub_headline')}
          className={`
            grid-7--mobile
            grid-5--tablet
            grid-6--desktop-small
            grid-5--desktop-large
            ${styles.subHeadline}
          `}
        />
      </div>
      
      {/* Hero Particles */}
      <HeroParticles />
    </section>
  );
};

export default HomeHeroSection;
