import React from 'react';

import cp from 'utils/classParser';

interface Props {
    title: string,
    icon: string,
    detail?: string,
    active?: boolean
}

const NavButton: React.FC<Props> = ({
    title,
    icon,
    detail,
    active = true
}: Props) => {
    return (
        <div className={cp(`
            max-h-12 py-3 px-4
            bg-c-bg-secondary rounded
            flex items-center justify-center
            ${active && 'border-c-primary border-b-4'}
        `)}>
            <span className={`mr-2 ${active ? 'inline' : 'hidden'}`}>
                {title}
            </span>
            <img className={`${active ? 'h-6 w-6' : 'h-7 w-7'}`}
                src={icon}
                alt={title}
            />
            {detail &&
                <span className={`ml-1 ${active ? 'inline' : 'hidden'}`}>
                    {detail}
                </span>
            }
        </div>
    );
}

export default NavButton;
