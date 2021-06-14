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
            h-10 py-3 px-4
            bg-c-bg-secondary rounded
            flex items-center justify-center
            ${active && 'border-c-primary border-b-4'}
        `)}>
            <span className={cp(`
                mr-2
                ${active ? 'inline' : 'hidden'}
            `)}>
                {title}
            </span>
            <i className={icon}></i>
            {
                detail &&
                <span className={cp(`
                    ml-1
                    ${active ? 'inline' : 'hidden'}
                `)}>
                    {detail}
                </span>
            }
        </div>
    );
}

export default NavButton;
