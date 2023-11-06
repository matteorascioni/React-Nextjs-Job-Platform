import React from 'react';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';
import Icon from '@components/Icon/Icon';
import {Icons} from '@typescript/types';

import styles from './TechnologyCard.module.css';

interface ITechnologyCard {
    headline: string;
    paragraph: string;
    icon: Icons;
}

const TechnologyCard = ({headline, paragraph, icon,}: ITechnologyCard) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Headline */}
                {headline && (
                <Headline
                    className={`
                        grid-8--mobile
                        grid-3--tablet
                        grid-4--desktop-small
                        grid-3--desktop-large
                        ${styles.headline}
                    `}
                    tagName="h3"
                    headline={headline}
                />
                )}

                {/* Paragraph */}
                {paragraph && (
                    <Paragraph 
                        paragraph={paragraph}
                        className={`
                            grid-4--desktop-small
                            grid-3--desktop-large
                            ${styles.paragraph}
                        `}
                    />
                )}
            </div>

            {/* iconContainer */}
            {icon && (
                <div className={styles.iconContainer}>
                    <Icon icon={icon} />
                </div>
            )}
        </div>
    )
}

export default TechnologyCard;
