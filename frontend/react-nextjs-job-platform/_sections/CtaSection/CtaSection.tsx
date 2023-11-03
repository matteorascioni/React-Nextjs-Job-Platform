import React from 'react';
import FormModal from '@components/FormModal/FormModal';

import styles from './CtaSection.module.css';

const CtaSection = () => {
    return (
        <section
            className={`
                grid-full-width
                ${styles.container}
            `}
        >
            <FormModal layout="buttonRed" />            
        </section>
    )
}

export default CtaSection
