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
        <div className='flex items-center'>
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
