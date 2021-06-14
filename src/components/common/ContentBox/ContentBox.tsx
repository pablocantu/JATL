import React from 'react';

import cp from 'utils/classParser';

interface Props {
    className?: string,
    children: React.ReactNode
}

const ContentBox: React.FC<Props> = ({
    className,
    children
}: Props) => {
    return (
        <div className={cp(`md:p-8 md:bg-c-bg-secondary md:rounded-md ${className}`)}>
            {children}
        </div>
    );
}

export default ContentBox;
