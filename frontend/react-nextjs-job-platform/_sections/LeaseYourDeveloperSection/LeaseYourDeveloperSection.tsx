import React from 'react';
import Headline from '@components/Headline/Headline';
import DescriptionCard from '@components/DescriptionCard/DescriptionCard';
import Paragraph from '@components/Paragraph/Paragraph';
import ExternalLink from '@components/ExternalLink/ExternalLink';
import Button from '@components/Button/Button';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import styles from './LeaseYourDeveloperSection.module.css';

const LeaseYourDeveloperSection = () => {
    const { t } = useTranslation('home');

    return (
        <section 
            id="leaseyourdeveloper"
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
                        headline={t('home:lease_your_dev_section_headline')}
                        className={`
                            grid-8--mobile
                            grid-8--tablet
                            grid-10--desktop-small
                            grid-8--desktop-large
                            ${styles.headline}
                        `}
                    />

                    {/* Sub Headline */}
                    <Headline
                        tagName="h2"
                        headline={t('home:lease_your_dev_section_sub_headline')}
                        className={`
                            grid-8--mobile
                            grid-8--tablet
                            grid-10--desktop-small
                            grid-8--desktop-large
                            ${styles.subHeadline}
                        `}
                    />

                    {/* Paragraphs */}
                    {/* First Paragraph */}
                    <Paragraph
                        paragraph={t('home:lease_your_dev_section_first_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Second Paragraph */}
                    <Paragraph
                        paragraph={t('home:lease_your_dev_section_second_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* External Link */}
                    <ExternalLink
                        className={styles.externalLink}
                        href="https://www.gate.bfs.admin.ch/salarium/public/index.html#/calculation?regionCode=4&nogaId=62&skillLevelCode=31&mgmtLevelCode=1&weeklyHourValue=40&educationCode=1&ageCode=30&workYearsCode=5&companySizeCode=3&month13SalaryCode=1&specialFeesCode=1&hourSalaryCode=0"
                    >
                        Bundesamt für statistik
                    </ExternalLink>

                    {/* Third Paragraph */}
                    <Paragraph
                        paragraph={t('home:lease_your_dev_section_third_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Fourth Paragraph */}
                    <Paragraph
                        paragraph={t('home:lease_your_dev_section_fourth_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Discover more button */}
                    <Link className={styles.discoverPlatformLink} href="/lease-your-dev-app">
                        {t('common:discover_platform_button')}
                    </Link>

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
                                headline={t('home:lease_your_dev_section_first_description_card_headline')}
                            >
                                <Paragraph
                                    paragraph={t('home:lease_your_dev_section_first_description_card_paragraph')}
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
                                headline={t('home:lease_your_dev_section_second_description_card_headline')}
                            >
                                <Paragraph
                                    paragraph={t('home:lease_your_dev_section_second_description_card_paragraph')}
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

export default LeaseYourDeveloperSection;
