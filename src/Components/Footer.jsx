import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full flex flex-col items-center py-4  h-[100px] border-t'>
			<div className='flex md:gap-16 gap-8'>
				<a href=''>Instagram</a>
				<a href=''>Twitter</a>
				<a href=''>LinkedIn</a>
				<a href=''>GitHub</a>
			</div>
			<div className='py-4'>Copyright @Reza</div>
		</footer>
	);
};

export default Footer;
