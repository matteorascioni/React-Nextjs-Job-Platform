import React from 'react';

interface IParagraph {
    className: string;
    paragraph?: string;
}

const Paragraph = ({ className, paragraph }:IParagraph) => {
    return <p className={className}>{paragraph}</p>
}

export default Paragraph;
