import * as React from "react";

import { IconSvgProps } from "@/types";

export const PortfolioIcon: React.FC<IconSvgProps> = ({ size = 22, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox="0 0 70 73" width={size || width} {...props}>
			<path
				d="M61.568 17H46.501v-6.785C46.501 6.556 43.849 4 39.866 4h-8.138C27.615 4 25.5 6.613 25.5 10.214V17H10.432A6.933 6.933 0 0 0 3.5 23.932v37.136a6.934 6.934 0 0 0 6.932 6.933h51.136a6.933 6.933 0 0 0 6.932-6.933h.001V23.932A6.933 6.933 0 0 0 61.568 17zM29.5 10.215C29.5 8.063 31.41 8 31.727 8h7.136c1.263 0 3.637.384 3.637 2.214V17h-13v-6.785zM61.568 64H10.432A2.932 2.932 0 0 1 7.5 61.068V43h3.13a1 1 0 1 0 0-2H7.5V23.932A2.932 2.932 0 0 1 10.432 21h51.136a2.932 2.932 0 0 1 2.932 2.932h.001V41H42.499v-.93a4.069 4.069 0 0 0-4.069-4.069h-4.86a4.069 4.069 0 0 0-4.07 4.069V41H16.631a1 1 0 1 0 0 2H29.5v1.93A4.07 4.07 0 0 0 33.57 49h4.86a4.07 4.07 0 0 0 4.07-4.07h-.001V43h22.002v18.068A2.932 2.932 0 0 1 61.568 64zM40.5 40.07l-.001 4.859a2.07 2.07 0 0 1-2.069 2.07h-4.86a2.07 2.07 0 0 1-2.07-2.07V40.07c0-1.143.926-2.069 2.07-2.069h4.86c1.143 0 2.07.925 2.07 2.069z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height, ...props }) => (
	<svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || width} {...props}>
		<path
			clipRule="evenodd"
			d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
			<path
				d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);
