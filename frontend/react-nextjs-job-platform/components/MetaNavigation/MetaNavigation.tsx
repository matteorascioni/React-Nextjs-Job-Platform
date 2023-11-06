import React from 'react'
import FormModal from '@components/FormModal/FormModal';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';

import styles from './MetaNavigation.module.css';

interface IMetaNavigation {
    toggleMenu?: boolean;
    layout?: 'noButton' | 'buttonRed';
}

const MetaNavigation = ({ toggleMenu, layout }: IMetaNavigation) => {
    return (
        <div className={styles.container}>
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
                {/* FormModal */}
                <div className={styles.formModal}>
                    <FormModal layout={layout} />
                </div>

                {/* Language Switcher */}
                <LanguageSwitcher toggleMenu={toggleMenu} />
            </div>
        </div>
    )
}

export default MetaNavigation
