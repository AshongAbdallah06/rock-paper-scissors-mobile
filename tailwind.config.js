/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#161622",
				secondary: {
					DEFAULT: "#FF9C01",
					100: "#FF9001",
					200: "#FF8E01",
				},
				black: {
					DEFAULT: "#000",
					100: "#1E1E2D",
					200: "#232533",
				},
				dark: "hsl(229, 25%, 31%)",
				score: "hsl(229, 64%, 46%)",
				header: "hsl(217, 16%, 45%)",
				back: {
					primary: "hsl(214, 47%, 23%)",
					secondary: "hsl(237, 49%, 15%)",
				},
				scissors: {
					primary: "hsl(39, 89%, 49%)",
					secondary: "hsl(40, 84%, 53%)",
				},
				paper: {
					primary: "hsl(230, 89%, 62%)",
					secondary: "hsl(230, 89%, 65%)",
				},
				rock: {
					primary: "hsl(349, 71%, 52%)",
					secondary: "hsl(349, 70%, 56%)",
				},
				lizard: {
					primary: "hsl(261, 73%, 60%)",
					secondary: "hsl(261, 72%, 63%)",
				},
				spock: {
					primary: "hsl(189, 59%, 53%)",
					secondary: "hsl(189, 58%, 57%)",
				},
				overlay: "#000000b3",
			},
			fontFamily: {
				pthin: ["Poppins-Thin", "sans-serif"],
				pextralight: ["Poppins-ExtraLight", "sans-serif"],
				plight: ["Poppins-Light", "sans-serif"],
				pregular: ["Poppins-Regular", "sans-serif"],
				pmedium: ["Poppins-Medium", "sans-serif"],
				psemibold: ["Poppins-SemiBold", "sans-serif"],
				pbold: ["Poppins-Bold", "sans-serif"],
				pextrabold: ["Poppins-ExtraBold", "sans-serif"],
				pblack: ["Poppins-Black", "sans-serif"],
			},
		},
	},
	plugins: [],
};
