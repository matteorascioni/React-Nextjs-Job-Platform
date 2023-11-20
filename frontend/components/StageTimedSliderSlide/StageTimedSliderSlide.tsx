import React from 'react';
import Headline from '@components/Headline/Headline';
import Paragraph from '@components/Paragraph/Paragraph';

import styles from './StageTimedSliderSlide.module.css';

interface IStageTimedSliderSlide {
    headline: string;
    paragraph: string;
}

const StageTimedSliderSlide = ({headline, paragraph,}:IStageTimedSliderSlide) => {
    return (
        <div 
            className="
                grid-8--mobile
                grid-8--tablet
                grid-12--desktop--small
                grid-12--desktop--large
            "
        >
            <div 
                className={`
                    grid-8--mobile
                    grid-8--tablet
                    grid-10--desktop-small
                    grid-8--desktop-large
                    grid-offset-1--desktop-small
                    grid-offset-2--desktop-large
                    ${styles.container}
                `}
            >
                {/* Content */}
                <div
                    className={`
                        grid-8--mobile
                        grid-4--tablet
                        grid-6--desktop-small
                        grid-4--desktop-large
                        ${styles.content}
                    `}
                >
                    {/* Headline */}
                    <Headline 
                        className={`
                            grid-3--tablet
                            grid-5--desktop-small
                            grid-3--desktop-large
                            ${styles.headline}
                        `}
                        tagName="h2"
                        headline={headline}
                    />
            
                    {/* Paragraph */}
                    <Paragraph 
                        paragraph={paragraph}
                        className={`
                            grid-3--tablet
                            grid-5--desktop-small
                            grid-3--desktop-large
                            ${styles.paragraph}
                        `}
                    />
                </div>
            </div>
        </div>
    );
};

export default StageTimedSliderSlide;