import React from 'react';
import Headline from '@components/Headline/Headline';
import DescriptionCard from '@components/DescriptionCard/DescriptionCard';
import Paragraph from '@components/Paragraph/Paragraph';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import styles from './DiscoverAppSection.module.css';

const DiscoverAppSection = () => {
    const { t } = useTranslation('home');
    
    return (
        <section 
            id="scoprilapiattaforma"
            className={`
                grid-full-width
                ${styles.container}
            `}
        >
            <div
                className="
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                "
            >
                <div
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-10--desktop-small
                        grid-8--desktop-large
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                    `}
                >
                    {/* Headline */}
                    <Headline
                        tagName="h1"
                        headline={t('home:discover_app_section_headline')}
                        className={`
                            grid-8--mobile
                            grid-8--tablet
                            grid-10--desktop-small
                            grid-8--desktop-large
                            ${styles.headline}
                        `}
                    />

                    {/* First Paragraph */}
                    <Paragraph
                        paragraph={t('home:discover_app_section_first_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Sub Headline */}
                    <Headline
                        tagName="h2"
                        headline={t('home:discover_app_section_sub_headline')}
                        className={`
                            grid-8--mobile
                            grid-8--tablet
                            grid-10--desktop-small
                            grid-8--desktop-large
                            ${styles.subHeadline}
                        `}
                    />

                    {/* Second Paragraph */}
                    <Paragraph
                        paragraph={t('home:discover_app_section_second_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Discover App Link */}
                    <div className={`
                            grid-8--mobile
                            grid-4--tablet
                            grid-4--desktop-small
                            grid-4--desktop-large
                            ${styles.subHeadline}
                        `}
                    >
                        <Link className={styles.discoverPlatformLink} href="/profinderapp">
                            {t('common:discover_app_button')}
                        </Link>
                    </div>

                    {/* Content */}
                    <div className={styles.content}>
                        {/* Come funziona? */}
                        <div
                            className="
                                grid-8--mobile
                                grid-4--tablet
                                grid-5--desktop-small
                                grid-4--desktop-large
                            "
                        >
                            {/* First Description Card */}
                            <DescriptionCard
                                tagName="h2"
                                headline={t('home:discover_app_section_first_description_card_headline')}
                            >
                                <Paragraph
                                    paragraph={t('home:discover_app_section_first_description_card_paragraph')}
                                    className={styles.paragraph}
                                />
                            </DescriptionCard>
                        </div>
                        
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
                            {/* Second Description Card */}
                            <DescriptionCard
                                tagName="h2"
                                headline={t('home:discover_app_section_second_description_card_headline')}
                            >
                                <Paragraph
                                    paragraph={t('home:discover_app_section_second_description_card_paragraph')}
                                    className={styles.paragraph}
                                />
                            </DescriptionCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverAppSection;
