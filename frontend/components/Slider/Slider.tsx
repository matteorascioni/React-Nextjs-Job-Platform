import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import {classNames} from '@helpers/classes';
import Button from '@components/Button/Button';
import Icon from '@components/Icon/Icon';
import {Icons} from '@typescript/types';

import styles from './Slider.module.css';

interface ITimingBar {
    index: number;
    sliderPositionIndex: number;
    duration: number;
}

const TimingBar = ({index, sliderPositionIndex, duration,}: ITimingBar) => {
    const [width, setWidth,] = useState(undefined as undefined | '100%');

    useEffect(() => {
        setWidth(index === sliderPositionIndex ? '100%' : undefined);
    }, [index, sliderPositionIndex,]);

    return (
        <div
            className={classNames({
                [styles.timingBar]: true,
                [styles.timingBarActive]: index === sliderPositionIndex,
            })}
            style={{
                transitionDuration: `${duration}ms`,
                width: width,
            }}
        />
    );
};

interface ISlider {
    items: JSX.Element[];
    desktopItemsPerSlide?: number;
    tabletItemsPerSlide?: number;
    mobileItemsPerSlide?: number;
    arrowIconRight?: Icons;
    arrowIconLeft?: Icons;
    transitionDuration?: number;
    rotate?: boolean;
    swipe?: boolean;
    iconClass?: 'white' | 'black';
    className?: string;
    classNameIcon?: string,
    breakpoints?: {
        mobile: number;
        tablet: number;
    };
    navigationAndControlsInside?: boolean;
    debug?: boolean;
    fadeOutOnExit?: boolean;
    // eslint-disable-next-line no-unused-vars
    navigationCallback?: (sliderItem: any) => void;
    showNavigationIfRequired?: boolean;
    showProgressBar?: boolean;
    showOverflow?: boolean;
    bulletLabels?: string[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const Slider = ({
    items,
    desktopItemsPerSlide = 3,
    tabletItemsPerSlide = 3,
    mobileItemsPerSlide = 1,
    arrowIconRight,
    arrowIconLeft,
    transitionDuration = 500,
    rotate = false,
    swipe = true,
    iconClass = 'black',
    classNameIcon,
    className = '',
    breakpoints = {
        mobile: 768,
        tablet: 1280,
    },
    navigationAndControlsInside = true,
    debug = false,
    fadeOutOnExit = true,
    navigationCallback, // called whenever a slide changes
    showNavigationIfRequired = true,
    showProgressBar = false,
    showOverflow = false, // display overflowing items to the right and left
    bulletLabels = [], // use labels instead of bullets
    autoPlay = false,
    autoPlayInterval = 5000,
}: ISlider) => {
    const responsive = (mobileItemsPerSlide + tabletItemsPerSlide + desktopItemsPerSlide) / 3 !== desktopItemsPerSlide;
    debug && console.log('[Slider]', 'responsive', responsive);

    const bulletLabelsContainer = useRef(null);
    const sliderRailRef = useRef(null);
    const [sliderItems, setSliderItems,] = useState([]);
    const [sliderNavigationItems, setSliderNavigationItems,] = useState([]);
    const [sliderPositionIndex, setSliderPositionIndex,] = useState(0);
    const [displayNavigation, setDisplayNavigation,] = useState(false);
    const [isCalculating, setIsCalculating,] = useState(true);

    /**
     * Calculate slider position index by direction
     *
     * @param {-1|1} direction
     * @returns {int}
     */
    const calcSliderPositionIndex = (direction = -1 | 1) => {
        const theoreticalTargetIndex = sliderPositionIndex + direction;
        switch (rotate) {
            case true:
                return 0 > theoreticalTargetIndex
                    ? sliderItems.length - 1
                    : theoreticalTargetIndex >= sliderItems.length
                        ? 0
                        : theoreticalTargetIndex;
            case false:
                return Math.min(sliderItems.length - 1, Math.max(0, theoreticalTargetIndex));
        }
    };

    /**
     * Distribute slider items
     */
    const distributeSliderItems = () => {
        // we only want to redistribute the items if the viewport width has changed
        // Changes in height do not require a redistribution
        // @ts-ignore
        const lastContainerWidth = parseInt(sliderRailRef.current.getAttribute('data-container-width'));
        const currentContainerWidth = // @ts-ignore
        (sliderRailRef.current.parentElement as unknown as HTMLElement).getBoundingClientRect().width;
        if (0 < lastContainerWidth && currentContainerWidth === lastContainerWidth) {
            return;
        }
        // @ts-ignore
        sliderRailRef.current.setAttribute('data-container-width', currentContainerWidth);

        const distributedItems = [] as number[];
        const newSliderItems = [] as any;

        const calculatedItemsPerSlide = calculateItemsPerSlide();

        // add invisible items at the end of the last slide if it does not contain enough children
        while (0 < items.length % calculatedItemsPerSlide) {
            const emptyPlaceholder = React.cloneElement(items[0], {
                key: items[0].key + String(items.length),
                className: `${items[0].props.className} ${styles.placeholder}`,
            });
            items = [...items, emptyPlaceholder,];
        }

        for (const item of items) {
            const index = items.indexOf(item);
            if (0 === (index + 1) % calculatedItemsPerSlide || items.length === index + 1) {
                const newSliderItem = (
                    <>
                        {items.map((item, i) => {
                            if (i > index - calculatedItemsPerSlide && i <= index && 0 > distributedItems.indexOf(i)) {
                                distributedItems.push(i);
                                return item;
                            }
                        })}
                    </>
                );
                newSliderItems.push(newSliderItem);
            }
        }

        setSliderItems(newSliderItems);
        debug && console.log('[Slider]', 'distributeSliderItems', newSliderItems);
    };

    const swipeConfiguration = {
        delta: 10,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
        trackMouse: true,
        rotationAngle: 0,
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setSliderPositionIndex(calcSliderPositionIndex(1));
        },
        onSwipedRight: () => {
            setSliderPositionIndex(calcSliderPositionIndex(-1));
        },
        ...swipeConfiguration,
    });

    let throttler: any = null;

    /**
     * Update items per slide based on responsiveness
     */
    const calculateItemsPerSlide = () => {
        if (!responsive) {
            return desktopItemsPerSlide;
        }
        if (breakpoints.mobile > window.innerWidth) {
            debug && console.log('[Slider]', 'itemsPerSlide', mobileItemsPerSlide);
            return mobileItemsPerSlide;
        } else if (breakpoints.mobile <= window.innerWidth && breakpoints.tablet > window.innerWidth) {
            debug && console.log('[Slider]', 'itemsPerSlide', tabletItemsPerSlide);
            return tabletItemsPerSlide;
        } else if (breakpoints.tablet <= window.innerWidth) {
            debug && console.log('[Slider]', 'itemsPerSlide', desktopItemsPerSlide);
            return desktopItemsPerSlide;
        }
        return desktopItemsPerSlide;
    };

    /**
     * Update slider navigation items based on slider items length
     */
    const updateSliderNavigationItems = () => {
        let navItems = [];
        for (let i: number = 0; sliderItems.length > i; i++) {
            navItems.push(i);
        }
        // @ts-ignore
        setSliderNavigationItems(navItems);
        debug && console.log('[Slider]', 'updateSliderNavigationItems', navItems);
    };

    useEffect(() => {
        if (navigationCallback) {
            navigationCallback(items[sliderPositionIndex]);
        }
    }, [sliderPositionIndex,]);

    const resizeListener = () => {
        clearTimeout(throttler);
        throttler = setTimeout(() => {
            distributeSliderItems();
            // updateSliderNavigationItems();
        }, 250);
    };
    
    useEffect(() => {
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    useEffect(() => {
        distributeSliderItems();
    }, [items,]);

    useEffect(() => {
        updateSliderNavigationItems();
    }, [items, sliderItems,]);

    useEffect(() => {
        updateSliderNavigationItems();
        setDisplayNavigation(1 < sliderItems.length);
    }, [sliderItems,]);

    useEffect(() => {
        setTimeout(() => {
            setIsCalculating(false);
        });
    }, []);

    const holdAutoPlay = () => {
        // @ts-ignore
        if (autoPlay && window.timedSliderInterval) {
            // @ts-ignore
            window.clearTimeout(window.timedSliderInterval);
        }
    };

    const resumeAutoPlay = (index: number) => {
        if (autoPlay) {
            // @ts-ignore
            window.timedSliderInterval = window.setTimeout(() => {
                setSliderPositionIndex(index);
            }, autoPlayInterval);
        }
    };

    useEffect(() => {
        if (!sliderItems.length) {
            return;
        }
        resumeAutoPlay(calcSliderPositionIndex(1));

        return () => {
            holdAutoPlay();
        };
    }, [sliderItems, sliderPositionIndex,]);

    // move items in bullet label container, so active is always left
    useEffect(() => {
        if (!bulletLabelsContainer?.current) {
            return;
        }
        const container = bulletLabelsContainer.current as unknown as HTMLElement;
        if (container.children[sliderPositionIndex]) {
            container.scrollTo({
                left: (container.children[sliderPositionIndex] as HTMLElement).offsetLeft,
                behavior: 'smooth',
            });
        }
    }, [bulletLabelsContainer, sliderPositionIndex,]);

    // if a link in slider opens overlay => stop autoplay and resume it again when overlay closes
    const resumeListener = () => {
        // @ts-ignore
        const index = parseInt(sliderRailRef.current.getAttribute('data-slider-position-index')) + 1;
        resumeAutoPlay(
            // @ts-ignore
            index > sliderRailRef.current.children.length - 1 ? 0 : index
        );
    };

    useEffect(() => {
        if ('undefined' !== typeof window) {
            window.addEventListener('stage-timed-slider-hold', holdAutoPlay);
            window.addEventListener('stage-timed-slider-resume', resumeListener);
        }
        return () => {
            window.removeEventListener('stage-timed-slider-hold', holdAutoPlay);
            window.removeEventListener('stage-timed-slider-resume', resumeListener);
        };
    }, []);

    const sliderNavigationAndControls = (
        <div className={`${displayNavigation ? '' : 'visibly-hidden'} sliderNavigationAndControls`}>
            <Button
                className={`slider-control ${styles.sliderControl} ${styles.prev} ${
                    0 === sliderPositionIndex && !rotate && styles.disabled
                }`}
                onClick={() => {
                    setSliderPositionIndex(calcSliderPositionIndex(-1));
                }}
            >
                <Icon
                    className={classNameIcon}
                    icon={arrowIconLeft}
                    iconClass={iconClass}
                />
            </Button>
            <Button
                className={`slider-control ${styles.sliderControl} ${
                    sliderItems.length - 1 <= sliderPositionIndex && !rotate && styles.disabled
                }`}
                onClick={() => {
                    setSliderPositionIndex(calcSliderPositionIndex(1));
                }}
            >
                <Icon
                    className={classNameIcon}
                    icon={arrowIconRight}
                    iconClass={iconClass}
                />
            </Button> 

            {showProgressBar && (
                <div
                    className={classNames({
                        progress: true,
                        [styles.progress]: true,
                    })}
                >
                    <div className={styles.progressRail} />
                    <div
                        className={styles.progressFill}
                        style={{
                            width: `${((sliderPositionIndex + 1) / sliderNavigationItems.length) * 100}%`,
                        }}
                    />
                </div>
            )}

            {
                <ul
                    ref={bulletLabelsContainer}
                    className={classNames({
                        sliderNavigation: true,
                        [styles.sliderNavigation]: true,
                        invisible: !showNavigationIfRequired,
                        [styles.bulletLabelsContainer]: !!bulletLabels.length,
                        'hide-scrollbar': !!bulletLabels.length,
                    })}
                >
                    {sliderNavigationItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={classNames({
                                    'white-bg': 'white' === iconClass,
                                    'black-bg': 'white' !== iconClass,
                                    [styles.sliderNavigationItem]: true,
                                    'sliderNavigationItemActive': index === sliderPositionIndex,
                                    [styles.bulletLabels]: !!bulletLabels.length,
                                })}
                                onClick={() => {
                                    setSliderPositionIndex(index);
                                }}
                            >
                                {/*Add timing bar above bullet labels*/}
                                {bulletLabels.length && autoPlay && (
                                    <TimingBar
                                        duration={autoPlayInterval}
                                        index={index}
                                        sliderPositionIndex={sliderPositionIndex}
                                    />
                                )}

                                {bulletLabels.length ? bulletLabels[index] : index}
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );

    return (
        <>
            <div
                {...swipeHandlers}
                className={classNames({
                    [styles.slider]: true,
                    [styles.sliderFadeOutOnExit]: fadeOutOnExit,
                    [styles.swipe]: swipe,
                    [className]: true,
                    [styles.showOverflow]: !isCalculating && showOverflow,
                })}
                style={{
                    // @ts-ignore
                    '--slider-transition-duration': `${transitionDuration}ms`,
                }}
            >
                <div
                    data-slider-position-index={sliderPositionIndex}
                    data-container-width="0"
                    ref={sliderRailRef}
                    className={styles.sliderRail}
                    style={{
                        // @ts-ignore
                        '--slider-position-index': sliderPositionIndex,
                    }}
                >
                    {sliderItems.map((sliderItem, index) => {
                        return (
                            <div
                                key={Date.now() * Math.random()}
                                className={`sliderItem ${styles.sliderItem} ${
                                    index === sliderPositionIndex && styles.sliderItemActive
                                }`}
                                data-items={calculateItemsPerSlide()}
                            >
                                {sliderItem}
                            </div>
                        );
                    })}
                </div>

                {navigationAndControlsInside && sliderNavigationAndControls}
            </div>

            {!navigationAndControlsInside && sliderNavigationAndControls}
        </>
    );
};

export default Slider;
