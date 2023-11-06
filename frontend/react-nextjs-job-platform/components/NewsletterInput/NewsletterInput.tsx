import React from 'react';
import {classNames} from '@helpers/classes';
import Button from '@components/Button/Button';
import Paragraph from '@components/Paragraph/Paragraph';

import styles from './NewsletterInput.module.css';

interface INewsLetter {
    layout?: 'footer';
    paragraph: string;
    placeholder: string;
    buttonLabel: string;
}

const NewsletterInput = ({
    layout,
    paragraph,
    placeholder,
    buttonLabel,
}: INewsLetter) => {
    return (
        <div className={styles.container}>
            {/* Paragraph */}
            <Paragraph 
                paragraph={paragraph}
                className={classNames({
                    ['grid-8--mobile']: true,
                    ['grid-6--tablet']: true,
                    ['grid-6--desktop-small']: layout !== 'footer',
                    ['grid-5--desktop-large']: layout !== 'footer',
                    ['grid-4--desktop-small']: layout === 'footer',
                    ['grid-4--desktop-large']: layout === 'footer',
                    [styles.paragraph]: true,
                })}
            />

            {/* Input and Button Container */}
            <div className={styles.inputAndButtonContainer}>
                {/* Input */}
                <input 
                    className={`
                        grid-6--tablet
                        grid-6--desktop-small
                        grid-6--desktop-large
                        ${styles.input}
                    `}
                    type="email"
                    placeholder={placeholder}
                />
                {/* Button Container */}
                <div
                    className={`
                        grid-2--tablet
                        grid-2--desktop-small
                        grid-2--desktop-large
                        ${styles.buttonContainer}
                    `}
                >
                    {/* Button */}
                    <Button 
                        layout="red"
                        className={styles.button}
                    >
                        {buttonLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewsletterInput;
