import React from 'react';
import {classNames} from '@helpers/classes';

import styles from './ExternalLink.module.css';

interface IExteranlLink {
    layout?: 'iconLink';
    className: string;
    href: string;
    children: React.ReactElement | React.ReactElement[] | string;
}

const ExternalLink = ({layout, className, href, children}: IExteranlLink) => {
    return (
        <a 
            className={classNames({
                [`${className}`]: true,
                [styles.link]: layout !== 'iconLink',
            })}
            href={href}
        >
            {children}
        </a>
    );
}

export default ExternalLink;
