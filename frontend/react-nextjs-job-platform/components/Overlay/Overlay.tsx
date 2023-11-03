import React from 'react';
import Momentaryinput from './Momentaryinput';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import Portal from '@components/Portal/Portal';

import styles from './Overlay.module.css';

interface IOvelay {
    closeModal: (e: React.BaseSyntheticEvent) => void;
}

const Overlay = ({ closeModal }: IOvelay) => {
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
                                    label="salutation"
                                    placeholder="Please choose"
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
                                    label="First name *"
                                    placeholder="Please fill in"
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
                                    label="Surname *"
                                    placeholder="Please fill in"
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
                                    label="Company *"
                                    placeholder="name of your company*"
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
                                    label="phone"
                                    placeholder="+{{prefisso paese}}"
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
                                    label="Email (business) *"
                                    placeholder="Your email (business)*"
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
                                    My request*
                                </label>
                                <textarea 
                                    placeholder="Please describe your request"
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
                                        Submit Request 
                                    </Button>
                                </div>

                                {/* Required Fields */}
                                <span className={styles.requiredFields}>* Required fields</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Portal>
    )
}

export default Overlay;
