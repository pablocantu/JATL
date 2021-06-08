import Character from 'components/common/Character/Character';
import React from 'react';

interface Props {
	src: string;
	name: string;
	bgColor: string;
	description: string;
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
			<Character
				src={src}
				name={name}
				bgColor={bgColor}
				height='h-16'
				width='h-16'
			/>
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
