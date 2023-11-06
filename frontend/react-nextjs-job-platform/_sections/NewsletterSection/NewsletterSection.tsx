import React from 'react';
import Headline from '@components/Headline/Headline';
import NewsletterInput from '@components/NewsletterInput/NewsletterInput';
import { useTranslation } from 'next-i18next';

import styles from './NewsletterSection.module.css';

const NewsletterSection = () => {
    const { t } = useTranslation('home');

    return (
        <section 
            className={`
                grid-full-width
                ${styles.container}
            `}
        >
            {/* Content */}
            <div 
                className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                    ${styles.content}
                `}
            >
                <div 
                    className={`
                        grid-8--desktop-small
                        grid-6--desktop-large
                        grid-offset-2--desktop-small
                        grid-offset-3--desktop-large
                    `}
                >
                    {/* Headline */}
                    <Headline 
                        tagName="h1"
                        headline={t('home:newsletter_section_headline')}
                        className={`
                            grid-8--mobile
                            grid-6--tablet
                            grid-6--desktop-small
                            grid-6--desktop-large
                            ${styles.headline}
                        `}
                    />

                    <div>
                        <NewsletterInput 
                            paragraph={t('home:newsletter_section_paragraph')}
                            placeholder={t('home:newsletter_section_placeholder')}
                            buttonLabel={t('home:newsletter_section_button_label')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection;
