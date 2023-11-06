import React from 'react';
import Link from 'next/link';
import Headline from '@components/Headline/Headline';
import ExperiencesList from '@components/ExperiencesList/ExperiencesList';
import SkillsList from '@components/SkillsList/SkillsList';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';

import styles from './CandidateIdPageComponent.module.css';

interface ICandidateIdPageComponent {
    src: string;
    alt: string;
    name: string;
    diploma: string;
    bachelor: string;
    master: string;
    professionalCertificate: string;
    workExperiences: string[];
    hardSkills: string[];
    softSkills: string[];
    onClick?: (e: React.BaseSyntheticEvent) => void;
}

const CandidatePageComponent = ({
    src,
    alt,
    name,
    diploma,
    bachelor,
    master,
    professionalCertificate,
    workExperiences,
    hardSkills,
    softSkills,
    onClick,
}:ICandidateIdPageComponent) => {
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
            {/* Image Container */}
            <div
                className={`
                grid-4--mobile
                grid-4--tablet
                grid-offset-1--desktop-small
                grid-offset-2--desktop-large
                ${styles.imageContainer}
                `}
            >
                {/* <Image
                    src={src}
                    alt={alt}
                    width={50}
                    height={50}
                    className={styles.image}
                /> */}
                {/* Momentary Image */}
                <div className={styles.image} />
            </div>

            {/* Name */}
            <Headline 
                headline={name}
                tagName="h1"
                className={`
                    gr id-8--mobile
                    grid-6--tablet
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.name}
                `}
            />

            {/* Education Container */}
            <div 
                className={`
                    grid-8--mobile
                    grid-6--tablet
                    grid-8--desktop-small
                    grid-6--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.educationContainer}
                `}
            >
                {/* Education Headline */}
                <Headline 
                    headline="Education"
                    tagName="h3"
                    className={styles.educationHeadline}
                />

                {/* Education List */}
                <ul className={styles.educationList}>
                    <li className={styles.educationListItems}>
                        <Icon 
                            icon="education"
                            iconClass="black"
                            className={styles.educationIcon}
                        />
                        <span>{diploma}</span>
                    </li>
                    <li className={styles.educationListItems}>
                        <Icon 
                            icon="education"
                            iconClass="black"
                            className={styles.educationIcon}
                        />
                        <span>{bachelor}</span>
                    </li>
                    <li className={styles.educationListItems}>
                        <Icon 
                            icon="education"
                            iconClass="black"
                            className={styles.educationIcon}
                        />
                        <span>{master}</span>
                    </li>
                    <li className={styles.educationListItems}>
                        <Icon 
                            icon="education"
                            iconClass="black"
                            className={styles.educationIcon}
                        />
                        <span>{professionalCertificate}</span>
                    </li>
                </ul>
            </div>

            {/* Work Experiences */}
            <ExperiencesList 
                items={workExperiences}
                headline="Work Experiences"
                icon="work_experience"
                iconClass="white"
            />

            {/* Hard skills list */}
            <div className={styles.hardSkillsContainer}>
                <SkillsList 
                    headline="Hard Skills"
                    items={hardSkills}
                />
            </div>

            {/* Soft skills list */}
            <div className={styles.softSkillsContainer}>
                <SkillsList 
                    headline="Soft Skills"
                    items={softSkills}
                />
            </div>

            {/* Question */}
            <span 
                className={`
                    grid-8--mobile
                    grid-6--tablet
                    grid-6-desktop-small
                    grid-5-desktop-small
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.question}
                `}
            >
                Do you want know more about
                <br></br>
                {name} ?
            </span>
            
            {/* Button Container */}
            <div 
                className={`
                    grid-8--mobile
                    grid-6-desktop-small
                    grid-5-desktop-small
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.buttonContainer}
                `}
            >
                {/* Button */}
                <Button
                    onClick={onClick}
                    layout="red"
                    className={styles.button}
                >
                    {/* Schedule a call  */}
                    <Icon 
                        icon="calendar"
                        iconClass="black"
                        className={styles.calendarIcon}
                    />
                </Button>
            </div>

            {/* Link */}
            <Link href="/profinder/">
                <a 
                    className={`
                        grid-offset-1--desktop-small
                        grid-offset-2--desktop-large
                        ${styles.link}
                    `}
                >
                    {/* Arrow Icon */}
                    <Icon 
                        icon="arrow_left"
                        iconClass="black"
                        className={styles.arrowIcon}
                    />
                    Back to home
                </a>
            </Link>
        </div>
    );
}

export default CandidatePageComponent;