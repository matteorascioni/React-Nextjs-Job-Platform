import React from 'react';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MetaNavigation from '@components/MetaNavigation/MetaNavigation';
import Icon from '@components/Icon/Icon';
import {classNames} from '@helpers/classes';
import {disableScroll} from '@helpers/disableScroll';
import { useTranslation } from 'next-i18next';
import {localeIsArrayChecker} from '@helpers/localeIsArrayChecker';

import styles from './Header.module.css';

interface IHeaderItem {
    id: string;
    url: string;
    title: string;
}

const Header = () => {
    const { t } = useTranslation('home');
    const [toggle, setToggle,] = useState(false);
    const router = useRouter();
    const isMenuItemsArray = localeIsArrayChecker(t('home:header_section_menu_items', { returnObjects: true }))
    const menuItems = t('home:header_section_menu_items', { returnObjects: true });

    disableScroll(toggle);

    useEffect(() => {
        setToggle(false);
    }, [router.locale]);

    return (
        <header 
            data-testid="test-header"
            className={styles.container}
        >
            {/* OnlyFromDesktop */}
            <div className={styles.onlyFromDesktop}>
                <MetaNavigation />    
            </div>

            {/* Content */}
            <div 
                className={`
                    grid-12--desktop-large
                    ${styles.content}
                `}
            >
                {/* logoLink */}
                <Link
                    href="/"
                    className={styles.logoLink}
                >
                    {/* Add the logo here */}
                    <Icon 
                        className={styles.logo}
                        icon="pro"
                        iconClass="crimson"
                    />
                </Link>

                {/* Mobile & Desktop Menu */}
                <div 
                    className={styles.hamburgerContainer}
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <div className={toggle ? styles.openBurger : styles.defaultBurger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                {/* Mobile & Desktop Nav */}
                <nav
                    className={classNames({
                        [styles.mobileNav]: true,
                        [styles.mobileNavOpen]: toggle,
                        [styles.desktopNav]: !toggle,
                    })}
                >
                    {/* List */}
                    <ul className={styles.list}>
                        {isMenuItemsArray && (
                            menuItems.map((item: IHeaderItem) => { 
                                return (
                                    //List Items
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            return setToggle(false);
                                        }}
                                        className={classNames({
                                            [styles.listItems]: true,
                                            [styles.active]: 'undefined' !== typeof window && item.url === window.location.pathname,
                                            [styles.transparent]: 'undefined' !== typeof window && item.url !== window.location.pathname,
                                        })}
                                    >
                                        {/* List Links */}
                                        <Link className={styles.listLinks} href={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        )}
                        {/* Only on Mobile and Tablet */}
                        <li className={styles.onlyOnMobileAndTablet}>
                            <MetaNavigation 
                                layout="noButton" 
                                toggleMenu={!toggle}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;