import React from 'react';
import {classNames} from '@helpers/classes';
import Headline from '@components/Headline/Headline';
import TechnologyCard from '@components/TechnologyCard/TechnologyCard';
import Slider from '@components/Slider/Slider';
import FormModal from '@components/FormModal/FormModal';
import { useTranslation } from 'next-i18next';
import { Icons } from '@typescript/types';

import styles from './TechnologiesSection.module.css';

interface IInnerTechnologies{
    id: string;
    headline: string;
    paragraph: string;
    icon: Icons;
}

interface ITechnologies {
    id: string;
    headline: string;
    stuck: IInnerTechnologies[];
}

const TechnologiesSection = () => {
    const { t } = useTranslation('home');

    return (
        <section 
            id="technologies"
            className={`
                grid-full-width
                ${styles.container}
            `}
        >
            <div
                className="
                    grid-8--mobile
                    grid-8--tablet
                    grid-12--desktop-small
                    grid-12--desktop-large
                "
            >
                {/* Headline */}
                <Headline
                    tagName="h1"
                    headline={t('home:technology_section_headline')}
                    className={`
                        grid-8--mobile
                        grid-7--tablet
                        grid-10--desktop-small
                        grid-8--desktop-large
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                        ${styles.headline}
                    `}
                />

                {/* subHeadline */}
                <Headline
                    tagName="h2"
                    headline={t('home:technology_section_sub_headline')}
                    className={`
                        grid-8--mobile 
                        grid-7--tablet
                        grid-10--desktop-small
                        grid-8--desktop-large
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                        ${styles.subHeadline}
                    `}
                />

                {/* TRADUZIONE DISPONIBILE SOLO SUL FILE HOME.JSON/IT */}
                {/* Content */}
                {t('home:technology_section_cards_content', {returnObjects: true}).map((item: ITechnologies) => {
                    if(Array.isArray(item)) {
                        return null;
                    }
                    return (
                        <div 
                            key={item.id}
                            className={classNames({
                                'grid-8--mobile': true,
                                'grid-8--tablet': true,
                                'grid-10--desktop-small': true,
                                'grid-8--desktop-large': true,
                                'grid-offset-1--desktop-small': true,
                                'grid-offset-2--desktop-large': true,
                                [styles.content]: true,
                            })}
                        >
                            {/* Card Headline */}
                            {item.headline && (
                                <Headline
                                    tagName="h3"
                                    headline={item.headline}
                                    className={styles.cardHeadline}
                                />
                            )}

                            {/* Card  */}
                            {item.stuck && (
                                <Slider
                                    items={item.stuck.map((technology: IInnerTechnologies, index: number) => {
                                        return (
                                            <div 
                                                key={technology.id}
                                                className={classNames({
                                                    'grid-8--mobile': true,
                                                    'grid-4--tablet': true,
                                                    'grid-5--desktop-small': true,
                                                    'grid-4--desktop-large': true,
                                                    'grid-gap--tablet': 0 !== index % 2,
                                                    'grid-gap--desktop-small': 0 !== index % 2,
                                                    'grid-gap--desktop-large': 0 !== index % 2,
                                                    [styles.card]: true,
                                                })}
                                            >
                                                <TechnologyCard 
                                                    headline={technology.headline}
                                                    paragraph={technology.paragraph} 
                                                    icon={technology.icon}
                                                />
                                            </div>
                                        )
                                    })}
                                    arrowIconLeft="chevron_left"
                                    arrowIconRight="chevron_right"
                                    iconClass="white"
                                    classNameIcon={styles.icon}
                                    desktopItemsPerSlide={2}
                                    tabletItemsPerSlide={2}
                                    mobileItemsPerSlide={1}
                                    fadeOutOnExit={false}
                                    rotate={true}
                                    swipe={true}
                                    showNavigationIfRequired={true}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TechnologiesSection;
