import React, { useState } from 'react';
import Overlay from '@components/Overlay/Overlay';
import Button from '@components/Button/Button';
import {disableScroll, disableNavigationScroll} from '@helpers/disableScroll';
import { useTranslation } from 'next-i18next';

const FormModal = ({ layout }) => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation('common');
    
    if(layout === 'noButton') {
        disableNavigationScroll(isModalOpen)
    } else if(layout == 'buttonRed') {
        disableScroll(isModalOpen);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            {isModalOpen && (
                <Overlay 
                    closeModal={closeModal}
                />
            )}

            {layout === 'buttonRed' && (
                <Button
                    layout='red'
                    onClick={openModal}
                >
                    {t('common:contact_us_button')}
                </Button>
            )}
            {layout === 'noButton' && (
                <Button
                    layout='noButton'
                    onClick={openModal}
                >
                    {t('common:contact_us_button')}
                </Button>
            )}
        </>
    )
}

export default FormModal;
