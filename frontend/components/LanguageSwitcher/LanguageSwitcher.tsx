import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import { classNames } from '@helpers/classes';

import styles from './LanguageSwitcher.module.css';

interface ILanguageSwitcher {
    toggleMenu: boolean;
}

const LanguageSwitcher = ({ toggleMenu }: ILanguageSwitcher) => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('');
    const router = useRouter();

    // Open Languages Menu
    const openLanguagesMenu = () => {
        setIsOpen(!isOpen);
    }

    const locales = [
        {
            langcode: 'de',
        },
        {
            langcode: 'fr',
        },
        {
            langcode: 'it',
        },
        {
            langcode: 'en',
        },
    ];

    // The toggleMenu prop is necessary to close the language Switcher when is still open while the menu gets closed
    useEffect(() => {
        if(toggleMenu === false) {
            setIsOpen(false);
        }
    }, [toggleMenu]);

    useEffect(() => {
        let currentLanguage = window.location.pathname.split('/')[1];    
        if(currentLanguage === '') {
            currentLanguage = 'en';
        }

        setLanguage(currentLanguage);
        setIsOpen(false);
    }, [router.locale]);

    return (
        <div className={styles.container}>
            {isOpen && (
                // Languages Container
                <nav className={styles.languagesContainer}>
                    {/* Language List */}
                    <ul className={styles.languagesList}>
                        {locales.map((locale) => {
                            return(
                                // LanguageListItem
                                <li className={styles.languagesListItem}>
                                    {/* Link */}
                                    <Link 
                                        className={classNames({
                                            [styles.link]: true,
                                            [styles.isActive]: router.locale === locale.langcode,
                                        })} 
                                        href="/" locale={locale.langcode}
                                    >
                                        {locale.langcode}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}

            {/* Button and Icon container */}
            <div className={styles.buttonAndIconContainer}>
                {/* Button */}
                <Button
                    onClick={openLanguagesMenu}
                    className={styles.button}
                    layout='black'
                >
                    {/* Button label */}
                    <span className={styles.buttonLabel}>{language}</span>

                    {/* Icon */}
                    <Icon 
                        icon="chevron_down"
                        iconClass="white"
                        className={classNames({
                            [styles.icon]: true,
                            [styles.rotate]: isOpen,
                        })}
                    />
                </Button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
