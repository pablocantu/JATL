import React from 'react';

interface Props {
    children: React.ReactNode
}

const ContentBox: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className='md:p-8 md:bg-c-bg-secondary md:rounded-md'>
            {children}
        </div>
    );
}

export default ContentBox;
