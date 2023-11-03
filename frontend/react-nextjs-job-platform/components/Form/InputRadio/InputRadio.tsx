import * as React from 'react';
import {FormState, UseFormRegister} from '@components/Form/InputCheckbox/node_modules/react-hook-form';

import {classNames} from '../../../helpers/classes';
import FormError from '../FormError/FormError';
import Label from '../Label/Label';
// @ts-ignore
import * as styles from './InputRadio.module.css';

interface IInputRadio {
    register: UseFormRegister<any>;
    formState: FormState<any>;
    name: string;
    validationRules?: any;
    classSelector: 'black' | 'gray';
    id: string;
    label: string;
    shouldValidate: boolean;
    errorMessage?: string;
    options: {
        [key: string]: string;
    }[];
}

const InputRadio = ({
    label,
    register,
    formState,
    name,
    validationRules,
    classSelector,
    id,
    shouldValidate,
    errorMessage,
    options,
}: IInputRadio) => {
    const {errors,} = formState;

    return (
        <div className={styles.container}>
            <Label
                required={!!validationRules?.required?.value}
                label={label}
                htmlFor={id} />
            <div className={styles.noErrorContainer}>
                {Object.keys(options).map((optionValue) => {
                    // @ts-ignore
                    const optionLabel = options[optionValue];
                    return (
                        <div className={styles.content}>
                            <input
                                id={id + optionValue}
                                className={classNames({
                                    [styles.input]: true,
                                    [styles[classSelector]]: true,
                                    [styles.redBorder]: shouldValidate && errors[name],
                                })}
                                {...register(name, validationRules)}
                                type="radio"
                                value={optionValue}
                            />
                            <Label
                                required={!!validationRules?.required}
                                classNames={`${styles.label} c2--mobile c2--tablet c2--desktop`}
                                label={optionLabel}
                                htmlFor={id + optionValue}
                            />
                        </div>
                    );
                })}
            </div>

            {errors[name] && <FormError
                error={errorMessage}
                className={styles.error} />}
        </div>
    );
};

export default InputRadio;
