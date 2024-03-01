import React from 'react';

const Hero = () => {
	return (
		<div className='w-full flex py-[300px]  items-center justify-center'>
			<div className='flex flex-col gap-4 text-center'>
				<h1 className='text-8xl'>Welcome to my Portfolio</h1>
				<p className='text-4xl'>
					I'm a passionate{' '}
					<span className='font-semibold'>frontend developer</span> dedicated to
					crafting exceptional web applications
				</p>
				<div className='text-center'>
					<button className='text-xl border rounded-full w-[200px] py-2'>
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
