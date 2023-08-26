/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				grainy: "url('../lib/images/grainybackground.png')",
				dualipasplash: "url('../lib/images/dualipasplashart3.jpg')",
				futurenostalgiabg: "url('../lib/images/futurenostalgia.jpg')",
				dua2017: "url('../lib/images/dua2017.png')",
			}
		}
	},
	plugins: []
};
