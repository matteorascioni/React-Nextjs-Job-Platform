import React from 'react';
import Headline from '@components/Headline/Headline';
import DescriptionCard from '@components/DescriptionCard/DescriptionCard';
import Paragraph from '@components/Paragraph/Paragraph';
import { useTranslation } from 'next-i18next';

import styles from './WhyUsSection.module.css';

const WhyUsSection = () => {
    const { t } = useTranslation('home');

    return (
        <section 
            id="whyus"
            className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                    ${styles.container}
                `}
        >
            {/* Headline */}
            <Headline
                tagName="h1"
                headline={t('home:why_us_section_headline')}
                className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.headline}
                `}
            />

            <div
                className="
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                "
            >
                {/* Scalability and Workflow, for translation:(First Description Card) */}
                <div
                    className="
                        grid-8--mobile
                        grid-4--tablet
                        grid-5--desktop-small
                        grid-4--desktop-large
                    "
                >
                    <DescriptionCard
                        tagName="h2"
                        headline={t('home:why_us_section_first_card_headline')}
                    >
                        <Paragraph
                            paragraph={t('home:why_us_section_first_card_paragraph')}
                        />
                    </DescriptionCard>
                </div>

                {/* Instant Answer, for translation:(Second Description Card) */}
                <div
                    className="
                        grid-8--mobile
                        grid-4--tablet
                        grid-5--desktop-small
                        grid-4--desktop-large
                        grid-gap--tablet
                        grid-gap--desktop-small
                        grid-gap--desktop-large
                    "
                >
                    <DescriptionCard
                        tagName="h2"
                        headline={t('home:why_us_section_second_card_headline')}
                    >
                        <Paragraph
                            paragraph={t('home:why_us_section_second_card_paragraph')}
                        />
                    </DescriptionCard>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
