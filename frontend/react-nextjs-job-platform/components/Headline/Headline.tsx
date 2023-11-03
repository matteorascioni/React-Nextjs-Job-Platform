import * as React from 'react';
import {allowSoftHyphens, stripTagFromHtml} from '@helpers/string';
import { HeadlineTag } from '@typescript/types';

interface IHeadline {
    tagName: HeadlineTag;
    headline: string;
    rawHTML?: boolean;
    className?: string;
    containerClassName?: string;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: React.BaseSyntheticEvent) => void;
}

const Headline = ({
    tagName,
    headline,
    containerClassName,
    className,
    onClick,
}:IHeadline) => {
    if ('' === headline) {
        return null;
    }
    if (!tagName) {
        tagName = 'h2';
    }

    headline = allowSoftHyphens(headline);
    // because we use CKEditor we often have a <p> around the actual headline
    headline = stripTagFromHtml('p', headline);

    const Element = tagName;

    return (
        <header
            className={containerClassName}
            onClick={onClick}>
            {
                // @ts-ignore
                <Element className={`headline ${className}`}>{headline}</Element>
            }
        </header>
    );
};

export default Headline;
