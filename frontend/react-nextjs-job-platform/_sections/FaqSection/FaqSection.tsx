import React, {Fragment} from 'react';
import FaqContent from '@content/FaqContent.json';
import AccordionItem from '@components/AccordionItem/AccordionItem';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';

import styles from './FaqSection.module.css';

const FaqSection = () => {
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
                {FaqContent.map(item => {
                    return (
                        <AccordionItem 
                            key={item.id}
                            headline={item.question}
                        >
                            {/* Paragraph */}
                            <p className={styles.paragraph}>{item.answer}</p>
                            
                            {item.subtitles && (
                                <>
                                    {item.subtitles.map(subtitle => {
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
                })}
            </div>
        </section> 
    );
};

export default FaqSection;
