import * as React from 'react';
import {classNames} from '@helpers/classes';
import FormError from '@components/Form/FormError/FormError';
import Label from '@components/Form/Label/Label';
// import {setLocalStorage} from '@helpers/localStorage';

import inputStyles from './../Input.module.css';
import styles from './TextInput.module.css';

const TextInput = ({
    label,
    register,
    formState,
    type = 'text',
    id,
    name,
    placeholder,
    validationRules,
    shouldValidate,
    onKeyDown,
    // prefillOldValues = true,
    // onKeyUp,
    hideError = false,
}) => {
    const inputValue = '';
    const {errors,} = formState;

    return (
        <div className={inputStyles.container}>
            {label && (
                <Label
                    required={!!validationRules?.required?.value}
                    label={label}
                    htmlFor={id}
                />
            )}
            {register && (
                <input
                    autoComplete="off"
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={classNames({
                        [styles.inputText]: true,
                        [inputStyles.bottomGreen]: shouldValidate && !errors[name],
                        [inputStyles.bottomRed]: shouldValidate && errors[name],
                    })}
                    defaultValue={inputValue}
                    onKeyDown={(e) => {
                        if (onKeyDown) {
                            onKeyDown(e);
                        }
                    }}
                    // onKeyUp={(e) => {
                    //     // store value for prefilling forms later
                    //     if (prefillOldValues) {
                    //         setLocalStorage(
                    //             'form.prefills',
                    //             {
                    //                 // @ts-ignore
                    //                 [label]: e.currentTarget.value,
                    //             },
                    //             true,
                    //             true
                    //         );
                    //     }
                    //     if (onKeyUp) {
                    //         onKeyUp(e);
                    //     }
                    // }}
                />
            )}

            {!hideError && <FormError error={errors[name]?.message} />}
        </div>
    );
};

export default TextInput;
