import * as React from 'react';
import ExternalLink from '@components/ExternalLink/ExternalLink';
import Headline from '@components/Headline/Headline';
import NewsletterInput from '@components/NewsletterInput/NewsletterInput';
import Icon from '@components/Icon/Icon';

import styles from './Footer.module.css';

interface IFooterIconItem {
    id: string,
    href: string,
    icon: string,
}

const Footer = () => {
    const icons = [
        {
            id: "f1",
            href: 'www.facebook.com',
            icon: "facebook",
        },
        {
            id: "f2",
            href: 'www.instagram.com',
            icon: "instagram",
        },
        {
            id: "f3",
            href: 'www.linkedin.com',
            icon: "linkedin",
        },
    ];

    return (
        <footer 
            className={`
                grid-full-width
                ${styles.container}
            `}
        >
            {/* Headline */}
            <Headline
                className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                    ${styles.headline}
                `}
                tagName="h1"
                headline="01"
            />

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
                <div>
                    {/* Contact and Map Container */}
                    <div 
                        className={`
                            grid-8--desktop-small
                            grid-8--desktop-large
                            ${styles.contactAndMapContainer}
                        `} 
                    >
                        <ul 
                            className={`
                                grid-4--tablet
                                grid-3--desktop-small
                                grid-3--desktop-large
                                ${styles.contactList}
                            `}
                        >
                            <li className={styles.contactItem}>
                                <span>
                                    01DevZone S.R.L.
                                </span>
                            </li> 
                            <li className={styles.contactItem}>
                                <span>
                                    Via (inserire via)
                                </span>
                            </li> 
                            <li className={styles.contactItem}> 
                                <span>
                                    00142, Roma
                                </span>
                            </li> 
                            <li className={styles.contactItem}>
                                <span>Tel: </span>
                                <ExternalLink href="tel:+39 0000000000">
                                    +39 0000000000
                                </ExternalLink>
                            </li> 
                            <li className={styles.contactItem}>
                                <span>E-mail: </span>
                                <ExternalLink href="mailto:test@gmail.com">
                                    test@gmail.com
                                </ExternalLink>
                            </li> 
                        </ul>

                        {/* Map Container */}
                        <div 
                            className={`
                                grid-8--mobile
                                grid-4--tablet
                                grid-5--desktop-small
                                grid-4--desktop-large
                                grid-gap--tablet
                                grid-gap--desktop-small
                                grid-offset-1--desktop-large
                                ${styles.mapContainer}
                            `}
                        >
                            {/* TODO: add the map here */}
                        </div>
                    </div>

                    {/* Newsletter Container and social Icon  */}
                    <div 
                        className={`
                            grid-8--tablet
                            grid-4--desktop--small
                            grid-4--desktop--large
                            ${styles.newsletterContainerAndSocialIcons}
                        `}
                    >
                        <div 
                            className="
                                grid-4--tablet
                                grid-4--desktop-small
                                grid-4--desktop-large
                            "
                        >
                            {/* Newsletter Input */}
                            {/** Add translations for this component **/}
                            <NewsletterInput
                                layout="footer"
                                placeholder="inserici la tua email" 
                                paragraph="Iscriviti alla newsletter"
                                buttonLabel="Iscriviti"
                            />
                        </div>

                        {/* Social Icon Container */}
                        <div 
                            className={`
                                grid-4--desktop-small
                                grid-4--desktop-large
                                ${styles.socialIconContainer}
                            `}
                        >
                            {/* Icons */}
                            {icons.map((item: IFooterIconItem) => {
                                return(
                                    <ExternalLink 
                                        key={item.id}
                                        className={styles.icon}
                                        layout="iconLink"
                                        href={item.href}
                                    >
                                        <Icon 
                                            //@ts-ignore
                                            icon={item.icon}
                                            iconClass="white"
                                        />
                                    </ExternalLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Copyright Container */}
                <div className={styles.copyrightContainer}>
                    {/* Copyright Headline */}
                    <span className={styles.copyrightHeadline}>
                        ©2022 01DevZone S.R.L., All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
