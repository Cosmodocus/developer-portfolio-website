import React from 'react';

const Contacts = () => {
	return (
		<div className='w-full flex flex-col items-center text-center justify-center h-screen gap-8'>
			<h1 className='text-8xl'>Get in Touch</h1>
			<p className='text-3xl text-center leading-[42px] w-[1200px]'>
				Have a project in mind or just want to say hello? I'd love to hear from
				you! Feel free to reach out to me using the contact information below:
			</p>
			<div className='border p-8 rounded-xl shadow-md text-left'>
				<p className='text-2xl'>Email: homayunir@gmail.com</p>
				<p className='text-2xl'>Phone: (647)-535-4495</p>
				<p className='text-2xl'>
					<a href='https://www.linkedin.com/in/reza-homayuni-0503861b6/'>
						LinkedIn: https://www.linkedin.com/in/reza-homayuni-0503861b6/
					</a>
				</p>
				<p className='text-2xl'>
					GitHub:
					<a href='https://github.com/Cosmodocus'>
						https://github.com/Cosmodocus
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contacts;
