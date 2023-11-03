import * as React from 'react';
import {classNames} from '@helpers/classes';

import styles from './Button.module.css';

interface IButton {
    layout?: 'red' | 'black' | 'white' | 'noButton';
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (e: React.BaseSyntheticEvent) => void;
    children: React.ReactElement | React.ReactElement[] | string;
}

const Button = ({
    layout,
    type,
    className,
    onClick,
    children
}:IButton) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames({
                [styles.container]: true,
                [`${className}`]: true,
                [styles.red]: layout === 'red',
                [styles.black]: layout === 'black',
                [styles.white]: layout === 'white',
                [styles.noButtonStyle]: layout === 'noButton',
            })}
        >
            {children}
        </button>
    )
}

export default Button;
