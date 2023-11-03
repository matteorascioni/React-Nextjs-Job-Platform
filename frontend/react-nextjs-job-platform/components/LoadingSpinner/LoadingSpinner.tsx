import React from 'react';

import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.c1}></div>
            <div className={styles.c2}></div>
            <div className={styles.c3}></div>
        </div>
    );
}

export default LoadingSpinner;
