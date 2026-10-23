import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	ProjectsConfig,
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
		{
			name: "Blog",
			url: "/blog/", // Internal links should not include the base path, as it is automatically added
		},
		{
			name: "GitHub",
			url: "https://github.com/shub39",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/Rushed.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "shub39",
	bio: "Building stuff I want",
	links: [
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
			name: "Bluesky",
			icon: "fa6-brands:bluesky",
			url: "https://bsky.app/profile/shub39.bsky.social",
    },
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
	],
};

export const projectsConfig: ProjectsConfig = {
	enable: true,
	title: "Projects",
	projects: [
		{
			name: "Rush",
			description:
				"A lyrics app to search, save and share lyrics like Spotify. Built with Jetpack Compose.",
			image: "https://raw.githubusercontent.com/shub39/Rush/refs/heads/master/fastlane/metadata/android/en-US/images/featureGraphic.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
			icon: "fa6-brands:android",
			tags: ["Android", "Kotlin Multiplatform", "Compose"],
      links: [
        {
					name: "Play Store",
					url: "https://play.google.com/store/apps/details?id=com.shub39.rush.play",
					icon: "fa6-brands:google-play",
				},
				{
					name: "GitHub",
					url: "https://github.com/shub39/Rush",
					icon: "fa6-brands:github",
				},
			],
		},
		{
			name: "Grit",
			description:
				"A simple, offline-first habit tracker for Android. 1k+ stars on GitHub.",
			image: "https://raw.githubusercontent.com/shub39/Grit/refs/heads/master/fastlane/metadata/android/en-US/images/featureGraphic.png",
			icon: "fa6-brands:android",
			tags: ["Android", "Kotlin Multiplatform", "Compose"],
      links: [
        {
					name: "Play Store",
					url: "https://play.google.com/store/apps/details?id=com.shub39.grit",
					icon: "fa6-brands:google-play",
				},
				{
					name: "GitHub",
					url: "https://github.com/shub39/grit",
					icon: "fa6-brands:github",
				},
			],
		},
		{
			name: "Momentum",
			description:
				"A montage maker that edits for you, powered by Mediapipe and low level Android APIs.",
			image: "https://raw.githubusercontent.com/shub39/Momentum/refs/heads/master/fastlane/metadata/android/en-US/images/featureGraphic.png",
			icon: "fa6-brands:android",
			tags: ["Android", "Mediapipe", "Compose"],
			links: [
				{
					name: "Play Store",
					url: "https://play.google.com/store/apps/details?id=shub39.momentum.play",
					icon: "fa6-brands:google-play",
        },
        {
					name: "GitHub",
					url: "https://github.com/shub39/Momentum",
					icon: "fa6-brands:github",
				},
			],
    },
    {
			name: "Dharmik",
			description:
				"Read the Bhagavad Gita offline with audio, translations & commentaries.",
			image: "https://raw.githubusercontent.com/shub39/Dharmik/refs/heads/master/fastlane/metadata/android/en-US/images/featureGraphic.png",
			icon: "fa6-brands:android",
			tags: ["Android", "Kotlin Multiplatform", "Compose"],
			links: [
				{
					name: "Play Store",
					url: "https://play.google.com/store/apps/details?id=com.shub39.dharmik.online",
					icon: "fa6-brands:google-play",
          },
          {
					name: "GitHub",
					url: "https://github.com/shub39/Dharmik",
					icon: "fa6-brands:github",
				},
			],
		},
		{
			name: "AttendPi",
			description:
				"A biometric attendance system running on a Raspberry Pi, written in Rust.",
			image:
				"https://raw.githubusercontent.com/shub39/attendpi/refs/heads/master/pics/2.jpg",
			icon: "fa6-brands:rust",
			tags: ["Rust", "IoT", "Raspberry Pi"],
			links: [
				{
					name: "GitHub",
					url: "https://github.com/shub39/attendpi",
					icon: "fa6-brands:github",
				},
			],
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
