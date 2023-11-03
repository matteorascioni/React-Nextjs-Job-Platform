
import {useEffect} from 'react';
export const disableScroll = (state) => {
    useEffect(() => {
        if(state) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [state])
}

// this is necessary to avoid scrolling after the users close the Form's modal using the button inside the MetaNavigation.js with the noButton layout
export const disableNavigationScroll = (state) => {
    useEffect(() => {
        if(state || !state) {
            document.body.style.overflow = 'hidden';
            if(window.innerWidth >= 1500) {
                if(!state) {
                    document.body.style.overflow = 'scroll';
                }
            }
        }
    }, [state])
}