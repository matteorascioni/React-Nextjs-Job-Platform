import React from 'react';
import Headline from '@components/Headline/Headline';

import styles from './DescriptionCard.module.css';

const DescriptionCard = ({ children, headline, tagName}) => {

    return (
        <div className={styles.container}>
            {/* Headline */}
            <Headline
                className={styles.headline}
                tagName={tagName}
                headline={headline}
            />
            
            <>
                {children}
            </>
        </div>
    )
} 

export default DescriptionCard;