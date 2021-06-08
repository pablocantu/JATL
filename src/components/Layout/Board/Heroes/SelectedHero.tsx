import React from 'react';

interface Props {
	src: string | undefined;
	name: string | undefined;
	bgColor: string | undefined;
	description?: string;
}

const SelectedHero: React.FC<Props> = ({
	src,
	name,
	bgColor,
	description
}: Props) => {
	return (
		<div className='flex flex-col items-center text-center'>
			<div className='block mb-4 font-bold sm:hidden'>{name}</div>
			<small className='hidden mb-4 font-bold sm:block'>Who are you today?</small>
			<div
				style={{ backgroundColor: bgColor }}
				className={'relative h-24 w-24 p-4 rounded-full'}
			>
				<img
					className={'m-auto absolute top-0 bottom-0 right-0 left-0 h-16 w-16'}
					alt={name}
					src={src}
				></img>
			</div>
			<div className='mt-1'>
				<div className='hidden font-bold sm:block'>{name}</div>
				{
					description &&
					<small><p className='text-c-text opacity-70'>{description}</p></small>
				}
			</div>
		</div>
	);
}

export default SelectedHero;
