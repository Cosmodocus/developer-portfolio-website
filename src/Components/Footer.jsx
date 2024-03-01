import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full flex flex-col items-center py-4  h-[100px] border'>
			<div className='flex gap-16'>
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
