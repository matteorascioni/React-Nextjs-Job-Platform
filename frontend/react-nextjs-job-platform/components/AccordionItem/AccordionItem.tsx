import React, { useState } from 'react';
import Headline from '@components/Headline/Headline';

import styles from './AccordionItem.module.css';

interface IAccordionItem {
    headline: string;
    children: React.ReactElement | React.ReactElement[];
}

const AccordionItem = ({ headline, children }:IAccordionItem) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            {/* Accordion Title */}
            <div
                className={`${styles.accordionTitle} ${isOpen ? styles.open : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {/* Headline */}
                <Headline 
                    className={styles.headline}
                    tagName="h2"
                    headline={headline}
                />                
            </div>
            {/* Accordion Item */}
            <div className={`${styles.accordionItem} ${!isOpen ? styles.collapsed : ""}`}>
                {/* Accordion Content */}
                <div className={styles.accordionContent}>{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;