import React from 'react';
import Momentaryinput from './Momentaryinput';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import Portal from '@components/Portal/Portal';
import { useTranslation } from 'next-i18next';

import styles from './Overlay.module.css';

interface IOvelay {
    closeModal: (e: React.BaseSyntheticEvent) => void;
}

const Overlay = ({ closeModal }: IOvelay) => {
    const { t } = useTranslation('common');

    const onSubmitHandler = () => {
        let newUser = {
            name: name,
        }

        fetch('http://127.0.0.1/8000/register', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                csrfToken: ''
            },
            body: JSON.stringify(newUser)
        })
    }

    return (
        <Portal wrapperId={document.body}>
            <div className={styles.container}>
                {/* Content */}
                <div 
                    className={`
                        grid-8--mobile
                        grid-8--tablet
                        grid-12--desktop-small
                        grid-12--desktop-large
                        ${styles.content}
                    `}
                >
                    {/* Icon container */}
                    <div className={styles.iconContainer}>
                        <div 
                            className="
                                grid-8--mobile
                                grid-8--tablet
                                grid-12--desktop-large
                                grid-12--desktop-small
                            "
                        >
                            <div 
                                className="
                                    grid-10--desktop-small
                                    grid-8--desktop-large
                                    grid-offset-1--desktop-small
                                    grid-offset-2--desktop-large
                                "
                            >
                                {/* Icon Button */}
                                <Button 
                                    className={styles.iconButton}
                                    onClick={closeModal}
                                    >
                                    <Icon 
                                        icon="close"
                                        iconClass="crimson"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <form 
                        className="
                            grid-10--desktop-small
                            grid-8--desktop-large
                            grid-offset-1--desktop-small
                            grid-offset-2--desktop-large
                        "
                    >
                        <div className={styles.tabletContent}>
                            <div 
                                className="
                                    grid-4--tablet
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_salutation')}
                                    placeholder={t('common:form_salutation_placeholder')}
                                />
                            </div>
                            <div 
                                className="
                                    grid-4--tablet 
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                    grid-gap--tablet
                                    grid-gap--desktop-small
                                    grid-gap--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_first_name')}
                                    placeholder={t('common:form_first_name_placeholder')}
                                />
                            </div>
                        </div>
                        <div className={styles.tabletContent}>
                            <div 
                                className="
                                    grid-4--tablet 
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_last_name')}
                                    placeholder={t('common:form_last_name_placeholder')}
                                />
                            </div>
                            <div 
                                className="
                                    grid-4--tablet
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                    grid-gap--tablet 
                                    grid-gap--desktop-small
                                    grid-gap--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_company')}
                                    placeholder={t('common:form_company_placeholder')}
                                />
                            </div>
                        </div>
                        <div className={styles.tabletContent}>
                            <div 
                                className="
                                    grid-4--tablet 
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_telephone')}
                                    placeholder={t('common:form_telephone_placeholder')}
                                />
                            </div>
                            <div 
                                className="
                                    grid-4--tablet
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                    grid-gap--tablet 
                                    grid-gap--desktop-small
                                    grid-gap--desktop-large
                                "
                            >
                                <Momentaryinput 
                                    label={t('common:form_label_email')}
                                    placeholder={t('common:form_email_placeholder')}
                                />
                            </div>
                        </div>
                        <div className={styles.tabletContent}>
                            {/* TextArea Container */}
                            <div 
                                className={`
                                    grid-4--tablet
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                    ${styles.textareaContainer}
                                `}
                            >
                                {/* Textarea */}
                                <label className={styles.label}>
                                    {t('common:form_label_textarea')}
                                </label>
                                <textarea 
                                    placeholder={t('common:form_textarea_placheolder')}
                                    className={styles.textarea}
                                >
                                </textarea>
                            </div>

                            {/* Submit Button and Required Fields */}
                            <div
                                className={`
                                    ${styles.subimitButtonAndRequiredFields}
                                    grid-4--tablet
                                    grid-5--desktop-small 
                                    grid-4--desktop-large
                                    grid-gap--tablet 
                                    grid-gap--desktop-small
                                    grid-gap--desktop-large
                                `}
                            >
                                {/* Button Container */}
                                <div className={styles.buttonContainer}>
                                    <Button
                                        type="submit"
                                        layout="red"
                                    >
                                        {t('common:form_label_submit_button')} 
                                    </Button>
                                </div>

                                {/* Required Fields */}
                                <span className={styles.requiredFields}>
                                    {t('common:form_label_required_fields')}
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Portal>
    )
}

export default Overlay;
