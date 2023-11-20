import React from 'react';
import {useState} from 'react';
import TextInput from '@components/Form/TextInput/TextInput';

import styles from '../Input.module.css';

const PasswordInput = ({
    label,
    placeholder,
    id,
    name,
}) => {
    const [passwordIsVisible, setPasswordIsVisible,] = useState(false);

    return (
        <div className={styles.container}>
            <TextInput
                prefillOldValues={false}
                type={passwordIsVisible ? 'text' : 'password'}
                id={id}
                name={name}
                label={label}
                placeholder={placeholder}
            />

            {/* TODO: Check with accessibility if tabIndex -1 is good or bad */}
            <span
                tabIndex={-1}
                onClick={() => {
                    setPasswordIsVisible(!passwordIsVisible);
                }}
            >
                {passwordIsVisible && (
                    <div className={styles.icon}>
                        <Icon
                            icon="show"
                            iconClass="black" />
                    </div>
                )}
                {!passwordIsVisible && (
                    <div className={styles.icon}>
                        <Icon
                            icon="hide"
                            iconClass="black" />
                    </div>
                )}
            </span>
        </div>
    );
};

export default PasswordInput;
