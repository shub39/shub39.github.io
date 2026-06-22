import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "shub39",
	subtitle: "Guest House",
	lang: "en",
	themeColor: {
		hue: 39,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/Banner.jpg",
		position: "center",
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true,
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-32x32.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			// sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/shub39", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Rushed.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Shubham Gorai",
	bio: "Android/KMP Dev and Linux Nerd",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter",
			url: "https://x.com/_shub39",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/shub39/",
		},
		{
			name: "Playstore",
			icon: "fa6-brands:google-play",
			url: "https://play.google.com/store/apps/dev?id=7686696368453505767",
		},
		{
			name: "YouTube",
			icon: "fa6-brands:youtube",
			url: "https://youtube.com/@shub39",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://instagram.com/_shub39",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
