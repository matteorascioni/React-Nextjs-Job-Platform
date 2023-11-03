import React from 'react';
import Headline from '@components/Headline/Headline';

import styles from './SkillsList.module.css';

interface ISkillsList {
    headline: string
    items: string[];
}

const SkillsList = ({headline, items,}: ISkillsList) => {
    return (
        <>
            {/* Headline */}
            <Headline 
                headline={headline}
                tagName="h3"
                className={`
                    grid-8--mobile
                    grid-6--tablet
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.headline}
                `}
            />
            
            {/* Skills Container */}
            <div 
                className={`
                    grid-4--tablet
                    grid-5--desktop-small
                    grid-4--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.skillsContainer}
                `}
            >
                {/* List */}
                <ul className={styles.list}>
                    {items.map((item) => {
                        return(
                            //listItem
                            // TODO: add the key props here
                            <li className={styles.listItem}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default SkillsList;
