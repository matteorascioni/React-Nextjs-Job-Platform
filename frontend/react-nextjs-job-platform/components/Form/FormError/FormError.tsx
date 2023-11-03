import React from 'react';

import styles from './FormError.module.css';

const FormError = ({error, className,}) => {
    if (!error) {
        error = '\u00A0';
    }

    return (
        <p
            className={`${styles.container} ${className} caption`}
            style={{color: 'red',}}
        >
            {error}
        </p>
    );
};

export default FormError;
