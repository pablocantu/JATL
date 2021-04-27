import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number,
    placeholder: string
}

const Input: React.FC<Props> = ({ value, placeholder, ...props }: Props) => {
    return (
        <div className='relative'>
            <div className={`absolute ${value ? '-top-6 text-sm' : 'hidden'}`}>
                {placeholder}
            </div>
            <input
                className='bg-transparent border-b border-c-primary w-full'
                value={value}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}

export default Input;
