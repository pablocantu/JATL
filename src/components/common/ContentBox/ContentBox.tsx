import React from 'react';

interface Props {
    children: React.ReactNode
}

const ContentBox: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className='p-8 bg-c-bg-secondary rounded-md'>
            {children}
        </div>
    );
}

export default ContentBox;
