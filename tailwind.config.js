/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				grainy: "url('../lib/images/grainybackground.png')",
				dua2017: "url('../lib/images/dua2017.png')",
				duamain: "url('../lib/images/duamain.jpg')",
			}
		}
	},
	plugins: []
};
