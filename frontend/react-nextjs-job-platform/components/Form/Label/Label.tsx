import * as React from 'react';

import * as styles from './Label.module.css';

interface ILabel {
    label: string;
    htmlFor: string;
    classNames?: string;
    required?: boolean;
    rawHTML?: boolean;
}

const Label = ({label, htmlFor, classNames, required, rawHTML,}: ILabel) => {
    if (rawHTML) {
        if (label.endsWith('<br />\n&nbsp;')) {
            label = label.slice(0, -14);
        }
        if (label.endsWith('<br>')) {
            label = label.slice(0, -4);
        }
        if (required) {
            label = `${label.trim()} *`;
        }
        return (
            <label
                htmlFor={htmlFor}
                className={`${classNames} caption--mobile caption--tablet caption--desktop ${styles.label}`}
                dangerouslySetInnerHTML={{__html: label,}}
            >
            </label>
        );
    }
    if (required) {
        label = `${label.trim()} *`;
    }
    return (
        <label
            htmlFor={htmlFor}
            className={`${classNames} caption--mobile caption--tablet caption--desktop ${styles.label}`}
        >
            {label}
        </label>
    );
};

export default Label;
