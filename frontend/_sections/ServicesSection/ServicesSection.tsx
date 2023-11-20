import React from 'react';
import Headline from '@components/Headline/Headline';
import StageTimedSlider from '@components/StageTimedSlider/StageTimedSlider';
import { useTranslation } from 'next-i18next';
import { localeIsArrayChecker } from '@helpers/localeIsArrayChecker';

import styles from './ServicesSection.module.css';

const ServicesSection = () => {
    const { t } = useTranslation('home');
    const isServicesContentArray = localeIsArrayChecker(t('home:services_content', { returnObjects: true }))
    const servicesContent = t('home:services_content', { returnObjects: true });

    return (
        <section
            id="services"
            className={styles.container}
        >
            <div 
                className="
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                "
            >
                {/* Headline */}
                <Headline
                    tagName="h1"
                    headline={t('home:services_section_headline')}
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-8--desktop-small
                        grid-6--desktop-large
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                        ${styles.headline}
                    `}
                />

                {/* Sub Headline */}
                <Headline
                    tagName="h2"
                    headline={t('home:services_section_sub_headline')}
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-8--desktop-small
                        grid-6--desktop-large
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                        ${styles.subHeadline}
                    `}
                />
            </div>

            {isServicesContentArray && (
                <StageTimedSlider items={servicesContent} />
            )}
        </section>
    );
};

export default ServicesSection;
