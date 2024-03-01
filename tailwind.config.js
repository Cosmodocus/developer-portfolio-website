// tailwind.config.js

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Define your custom colors here
				primary: '#007bff', // Primary Color
				secondary: '#6c757d', // Secondary Color
				accent: '#28a745', // Accent Color
				background: '#f8f9fa', // Background Color
				text: '#343a40', // Text Color
			},
		},
	},
	plugins: [],
};
