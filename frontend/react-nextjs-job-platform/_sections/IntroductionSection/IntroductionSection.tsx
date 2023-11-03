import React from 'react';
import Link from 'next/link';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';
import { useTranslation } from 'next-i18next';

import styles from './Introduction.module.css';

const IntroductionSection = () => {
    const { t } = useTranslation('home');

    return (
        <section 
            id="aboutus"
            className={`
                grid-8--mobile
                grid-8--tablet
                grid-12--desktop-small
                grid-12--desktop-large
                ${styles.container}
            `}
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
                    headline={t('home:introduction_section_headline')}
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-8--desktop-small
                        grid-6--desktop-large
                        ${styles.headline}
                    `}
                />

                {/* Paragraphs */}
                <div>
                    {/* First Paragraph */}
                    <Paragraph
                        paragraph={t('home:introduction_section_first_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Second Paragraph */}
                    <Paragraph
                        paragraph={t('home:introduction_section_second_paragraph')}
                        className={styles.paragraph}
                    />

                    {/* Discover platform button */}
                    <Link href="/lease-your-dev-app">
                        {t('common:discover_platform_button')}
                    </Link>

                    {/* Third Paragraph */}
                    <Paragraph
                        paragraph={t('home:introduction_section_third_paragraph')}
                        className={styles.paragraph}
                    />
                </div>

                {/* Link */}
                <Link 
                    className={`
                        grid-8--desktop-small
                        grid-6--desktop-large
                        ${styles.link}
                    `}
                    href="#leaseyourdeveloper"
                >
                    {t('home:introduction_section_link_label')}
                </Link>
            </div>
        </section>
    );
}

export default IntroductionSection;
