import * as React from 'react';
import {classNames} from '@helpers/classes';
import Slider from '@components/Slider/Slider';
import StageTimedSliderSlide from '@components/StageTimedSliderSlide/StageTimedSliderSlide';

import styles from './StageTimedSlider.module.css';

interface IStageTimedSlider {
    items: any[];
}

const StageTimedSlider = ({items}: IStageTimedSlider) => {
    const renderedItems: any[] = [];
    
    items.map((item) => {
        renderedItems.push(
            <StageTimedSliderSlide
                key={item.id}
                headline={item.headline}
                paragraph={item.paragraph}
            />
        );
    });

    return (
        <div
            className={classNames({
                'grid-12--desktop-small': true,
                'grid-12--desktop-large': true,
                [styles.container]: true,
                [styles.containerSlider]: 1 < items.length,
                [styles.containerDefault]: 1 >= items.length,
            })}
        >
            <Slider
                autoPlay
                autoPlayInterval={10000}
                arrowIconLeft="chevron_left"
                arrowIconRight="chevron_right"
                items={renderedItems}
                desktopItemsPerSlide={1}
                tabletItemsPerSlide={1}
                mobileItemsPerSlide={1}
                fadeOutOnExit={false}
                rotate
                bulletLabels={items.map((item) => {
                    return item.headline;
                })}
                navigationAndControlsInside={false}
            />
        </div>
    );
};

export default StageTimedSlider;