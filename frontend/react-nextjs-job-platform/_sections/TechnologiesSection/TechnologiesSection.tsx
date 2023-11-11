import React from 'react';
import {classNames} from '@helpers/classes';
import Headline from '@components/Headline/Headline';
import TechnologyCard from '@components/TechnologyCard/TechnologyCard';
import Slider from '@components/Slider/Slider';
import { Icons } from '@typescript/types';
import Icon from '@components/Icon/Icon';
import { useTranslation } from 'next-i18next';
import {localeIsArrayChecker} from '@helpers/localeIsArrayChecker';

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
    technologies: IInnerTechnologies[];
}

const TechnologiesSection = () => {
    const { t } = useTranslation('home');
    const isTechnologySectionCardsContentArray = localeIsArrayChecker(t('home:technology_section_cards_content', {returnObjects: true}))
    const technologySectionCardsContent = t('home:technology_section_cards_content', {returnObjects: true})

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
                {isTechnologySectionCardsContentArray && (
                    technologySectionCardsContent.map((item: ITechnologies) => {
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
                                {item.technologies && (
                                    <Slider
                                        items={item.technologies.map((technology: IInnerTechnologies, index: number) => {
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
                                                    <div className={styles.container}>
                                                        <Icon icon={technology.icon} />
                                                    </div>
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
                    })
                )}
            </div>
        </section>
    )
}

export default TechnologiesSection;
