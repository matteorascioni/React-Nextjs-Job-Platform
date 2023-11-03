import * as React from 'react';

import styles from './Overlay.module.css';

interface IMomentaryInput {
    label: string;
    placeholder: string;
}

const Momentaryinput = ({
    label,
    placeholder,
}: IMomentaryInput) => {
    return (
        <div 
        className={styles.inputContainer}
    >
        {/* Label */}
        <label className={styles.label}>
            {label}
        </label>
        {/* Input */}
        <input 
            className={styles.input} 
            type="text"
            placeholder={placeholder}
        />
    </div> 
    )
}

export default Momentaryinput
