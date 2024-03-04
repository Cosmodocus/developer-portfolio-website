import React from 'react';

const Hero = () => {
	return (
		<div className='w-full flex py-[300px]  items-center justify-center'>
			<div className='flex flex-col gap-4 text-center'>
				<h1 className='md:text-8xl text-4xl'>Welcome to my Portfolio</h1>
				<p className='md:text-4xl text-xl '>
					I'm a passionate{' '}
					<span className='font-semibold text-[#1fc6c6] underline'>
						frontend developer
					</span>{' '}
					dedicated to crafting exceptional web applications and websites
				</p>
				<div className='text-center flex items-center justify-center md:gap-4 gap-2'>
					<button className='md:text-xl text-lg border-4 rounded-full md:w-[200px] px-4 py-2'>
						Learn More
					</button>
					<button className='md:text-xl text-lg border-4 rounded-full md:w-[200px] px-4 py-2'>
						Resume CV
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
