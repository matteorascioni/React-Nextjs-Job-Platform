import * as React from 'react';

import {classNames} from '@helpers/classes';
import FormError from '@components/Form/FormError/FormError';
import Label from '@components/Form/Label/Label';

import  styles from './InputCheckbox.module.css';

const InputCheckbox = ({
    label,
    name,
    classSelector,
    id,
    errorMessage,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.noErrorContainer}>
                <input
                    id={id}
                    className={classNames({
                        [styles.input]: true,
                        [styles[classSelector]]: true,
                        // [styles.redBorder]: shouldValidate && errors[name],
                    })}
                    name={name}
                    type="checkbox"
                />
                <Label
                    // required={!!validationRules?.required?.value}
                    //  the * should not be added automatically for checkboxes but need to be set by editors
                    required={false}
                    classNames={styles.label}
                    label={label}
                    rawHTML
                    htmlFor={id}
                />
            </div>

            <FormError
                error=""
                // error={errors[name] ? errorMessage : undefined}
                className={styles.error}
            />
        </div>
    );
};

export default InputCheckbox;
