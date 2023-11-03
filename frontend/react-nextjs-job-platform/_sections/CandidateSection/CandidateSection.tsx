import React from 'react';
import Headline from '@components/Headline/Headline';
import Slider from '@components/Slider/Slider';
import { classNames } from '@helpers/classes';
import CandidateCard from '@components/CandidateCard/CandidateCard';
import ICandidateSection from '@typescript/interfaces/ICandidateSection';

import styles from './CandidateSection.module.css';

const CandidateSection = ({ headline, }: ICandidateSection) => {
    const items = [
        {
            src:"",
            alt: "",
            name: "name",
            paragraph: 'test',
            id: "c1",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 2",
            paragraph: 'test',
            id: "c2"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 3",
            paragraph: 'test',
            id: "c3"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 4",
            paragraph: 'test',
            id: "c4"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 5",
            paragraph: 'test',
            id: "c5"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 6",
            paragraph: 'test',
            id: "c6"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 7",
            paragraph: 'test',
            id: "c7",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 8",
            paragraph: 'test',
            id: "c8"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 9",
            paragraph: 'test',
            id: "c9"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 10",
            paragraph: 'test',
            id: "c10"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 11",
            paragraph: 'test',
            id: "c11"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 12",
            paragraph: 'test',
            id: "c12"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 13",
            paragraph: 'test',
            id: "c13",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 14",
            paragraph: 'test',
            id: "c14"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 15",
            paragraph: 'test',
            id: "c15"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 16",
            paragraph: 'test',
            id: "c16"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 17",
            paragraph: 'test',
            id: "c17"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 18",
            paragraph: 'test',
            id: "c18"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 19",
            paragraph: 'test',
            id: "c19"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 20",
            paragraph: 'test',
            id: "c20"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 21",
            paragraph: 'test',
            id: "c21"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 22",
            paragraph: 'test',
            id: "c22"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 23",
            paragraph: 'test',
            id: "c23"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 24",
            paragraph: 'test',
            id: "c24"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 25",
            paragraph: 'test',
            id: "c25"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 26",
            paragraph: 'test',
            id: "c26"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 27",
            paragraph: 'test',
            id: "c27"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 28",
            paragraph: 'test',
            id: "c28"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 29",
            paragraph: 'test',
            id: "c29"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 30",
            paragraph: 'test',
            id: "c30"
        },
    ];

    return (
        <section className={styles.container}>
            {/* Headline */}
            <div className="grid-12--desktop-small grid-12--desktop-large">
                <Headline 
                    tagName="h1"
                    headline={headline}
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-10--desktop-small
                        grid-12--desktop-large
                        ${styles.headline}
                    `}
                />
            </div>

            {/* Card  */}
            <div 
                className="
                    grid-12--desktop-small
                    grid-12--desktop-large
                "
            >
                {items && (
                    <Slider
                        items={items.map((item, index) => {
                            return (
                                <div 
                                    key={item.id}
                                    className={classNames({
                                        'grid-8--mobile': true,
                                        'grid-4--tablet': true,
                                        'grid-5--desktop-small': true,
                                        'grid-4--desktop-large': true,
                                        'grid-gap--tablet': 0 !== index % 2,
                                        'grid-gap--desktop-small': 0 !== index % 4,
                                        'grid-gap--desktop-large': 0 !== index % 4,
                                        [styles.card]: true,
                                    })}
                                >
                                    <CandidateCard
                                        // src={item.src} 
                                        // alt={item.alt} 
                                        name={item.name}
                                        paragraph={item.paragraph}
                                        href={'/lease-your-dev-app/' + item.id}
                                    />
                                </div>
                            );
                        })}
                        classNameIcon={styles.icon}
                        arrowIconLeft="chevron_left"
                        arrowIconRight="chevron_right"
                        iconClass="white"
                        desktopItemsPerSlide={4}
                        tabletItemsPerSlide={2}
                        mobileItemsPerSlide={1}
                        fadeOutOnExit={false}
                        rotate={true}
                        swipe={true}
                        showNavigationIfRequired={true}
                    />
                )}
            </div>
        </section>
    )
}

export default CandidateSection;
