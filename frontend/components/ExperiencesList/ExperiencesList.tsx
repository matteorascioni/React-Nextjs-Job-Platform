import React from 'react';
import Headline from '@components/Headline/Headline';
import Icon from '@components/Icon/Icon';

import styles from './ExperiencesList.module.css';

const ExperiencesList = ({
    items, 
    headline,
    icon,
    iconClass,
}) => {
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

            {/* List */}
            <ul 
                className={`
                    grid-8--mobile
                    grid-6--tablet
                    grid-8--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.list}
                `}
            >
                {items.map(item => {
                    return(
                        // List Item
                        <li 
                            key={item.id}
                            className={styles.listItem}
                        >
                            {/* Icon */}
                            <Icon 
                                icon={icon}
                                iconClass={iconClass}
                                className={styles.icon}
                            />

                            <div>
                                {/* Role */}
                                <span className={styles.role}>
                                    {item.role}
                                </span>

                                {/* Company Name */}
                                <span className={styles.companyName}>
                                    {item.companyName}
                                </span>

                                {/* Date */}
                                <span className={styles.date}>
                                    {item.from}
                                </span>

                                {/* Hyphen */}
                                <span className={styles.hyphen}>
                                    -
                                </span>  

                                {/* Date */}
                                <span className={styles.date}>
                                    {item.to}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default ExperiencesList;
