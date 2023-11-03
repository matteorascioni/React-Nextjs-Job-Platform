import React from 'react';
//import Image from 'next/image';
import Link from 'next/link';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';

import styles from './CandidateCard.module.css';


interface ICandidateCard {
    src?: string; 
    alt?: string;
    name: string; 
    paragraph?: string;
    href: string;
}

const CandidateCard = ({ 
    src, 
    alt, 
    name, 
    paragraph,
    href,
}: ICandidateCard) => {
    return (
        <div className={styles.container}>
            {/* Image */}
            {/* <Image
                src={src}
                alt={alt}
                width={50}
                height={50}
                className={styles.image}
            /> */}

            {/* TODO: remove this div and replace it with the Image Component */}
            <div className={styles.image} />

            {/* Name */}
            <Headline 
                headline={name}
                tagName="h2"
                className={styles.name}
            />

            {/* Paragraph */}
            <Paragraph
                paragraph={paragraph}
                className={styles.paragraph}
            />

            {/* Link */}
            <Link className={styles.link} href={href}>
                Discover more about 
                <br></br>
                {name}
            </Link>
        </div>
    );
}

export default CandidateCard;
