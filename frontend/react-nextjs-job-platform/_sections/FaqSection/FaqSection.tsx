import React, {Fragment} from 'react';
import AccordionItem from '@components/AccordionItem/AccordionItem';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';
import { useTranslation } from 'next-i18next';
import { localeIsArrayChecker } from '@helpers/localeIsArrayChecker';

import styles from './FaqSection.module.css';

interface IFaqSectionItem {
    id: string;
    question: string;
    answer: string;
    subtitles: [];
}

interface IFaqSectionInnerItem {
    subtitle: string;
    content: string;
    id: string;
}

const FaqSection = () => {
    const { t } = useTranslation('home');
    const isFaqSectionContentArray = localeIsArrayChecker(t('home:faq_section_content', { returnObjects: true }))
    const faqSectionContent = t('home:faq_section_content', { returnObjects: true });

    return (
        <section
            id="faq"
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
                className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-10--desktop-small
                    grid-8-desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.headline}
                `}
                tagName="h1"
                headline="Frequently Asked Questions(FAQ)"
            />

            <div
                className="
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                "
            >
                {isFaqSectionContentArray && (
                    faqSectionContent.map((item: IFaqSectionItem) => {
                        return (
                            <AccordionItem 
                                key={item.id}
                                headline={item.question}
                            >
                                {/* Paragraph */}
                                <p className={styles.paragraph}>{item.answer}</p>
                                
                                {item.subtitles && (
                                    <>
                                        {item.subtitles.map((subtitle: IFaqSectionInnerItem) => {
                                            if(Array.isArray(item)) {
                                                return null
                                            }
                                            return(
                                                <Fragment key={subtitle.id}>
                                                    {/* Sub title */}
                                                    <Headline 
                                                        className={styles.subtitle}
                                                        tagName="h3"
                                                        headline={subtitle.subtitle}
                                                    />

                                                    {/* Sub Content */}
                                                    <Paragraph 
                                                        paragraph={subtitle.content}
                                                        className={styles.subContent} 
                                                    />
                                                </Fragment>
                                            )
                                        })}
                                    </>
                                )}
                            </AccordionItem>
                        );
                    })
                )}
            </div>
        </section> 
    );
};

export default FaqSection;
