import React, { useState } from 'react';
import Link from 'next/link';
import Headline from '@components/Headline/Headline';
import CandidateCard from '@components/CandidateCard/CandidateCard';
import Icon from '@components/Icon/Icon';
import Button from '@components/Button/Button';
import { classNames } from '@helpers/classes';

import styles from './CategoryIdPageComponent.module.css';

const CategoryIdPageComponent = () => {
    const items = [
        {
            src:"",
            alt: "",
            name: "name",
            id: "c1",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 2",
            id: "c2"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 3",
            id: "c3"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 4",
            id: "c4"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 5",
            id: "c5"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 6",
            id: "c6"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 7",
            id: "c7",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 8",
            id: "c8"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 9",
            id: "c9"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 10",
            id: "c10"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 11",
            id: "c11"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 12",
            id: "c12"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 13",
            id: "c13",
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 14",
            id: "c14"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 15",
            id: "c15"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 16",
            id: "c16"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 17",
            id: "c17"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 18",
            id: "c18"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 19",
            id: "c19"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 20",
            id: "c20"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 21",
            id: "c21"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 22",
            id: "c22"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 23",
            id: "c23"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 24",
            id: "c24"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 25",
            id: "c25"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 26",
            id: "c26"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 27",
            id: "c27"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 28",
            id: "c28"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 29",
            id: "c29"
        },
        {
            src:"",
            alt: "",
            name: "{{name}} 30",
            id: "c30"
        },
    ];

    const [visibility, setVisibility] = useState(20);

    const loadMoreItemsHandler = () => {
        setVisibility(item => item + 6);
    }

    return (
        <div
            className={`
                grid-8--mobile 
                grid-8--tablet
                grid-12--desktop-small
                grid-12--desktop-large
                ${styles.container}
            `}
        >
            {/* Headline */}
            <Headline 
                headline="Category Headline"
                tagName="h1"
                className={`
                    ${styles.headline}
                `}
            />

            {/* List */}
            <ul className={styles.list}>
                {items.slice(0, visibility).map((item, index) => {
                    return(
                        // List Items
                        <li
                            className={classNames({
                                'grid-4--tablet': true,
                                'grid-4--desktop-small': true,
                                'grid-4--desktop-large': true,
                                'grid-gap--tablet': 0 !== index % 2,
                                'grid-gap--desktop-small': 0 !== index % 3,
                                'grid-gap--desktop-large': 0 !== index % 3,
                                [styles.listItem]: true,
                            })}
                        >
                            <CandidateCard 
                                // src
                                // alt 
                                name={item.name}
                                href={'/profinderapp/' + item.id}
                            />
                        </li>
                    );
                })}
            </ul>

            {/* Button Container */}
            {items.length > visibility ? (
                <div className={styles.buttonContainer}>
                    <Button
                        layout="red"
                        onClick={loadMoreItemsHandler}
                    >
                        Load More
                    </Button>
                </div>
            ) : (
                <>
                    {/* Warning */}
                    <span className={styles.warning}>
                        All cards have been showed, Do you want go back to home ?
                    </span>
                    {/* Link */}
                    
                    <Link 
                        className={styles.link} 
                        href="/profinderapp/"
                    >
                        {/* Arrow Icon */}
                        <Icon 
                            icon="arrow_left"
                            iconClass="black"
                            className={styles.arrowIcon}
                        />
                        Click here
                    </Link>
                </>
            )}
        </div>
    );
}

export default CategoryIdPageComponent;
