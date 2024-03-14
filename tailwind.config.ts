import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { base } from './src/base';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'media-brand': 'rgb(var(--media-brand) / <alpha-value>)',
				'media-focus': 'rgb(var(--media-focus) / <alpha-value>)'
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'rocket',
						enhancements: true
					}
				],
				custom: [base]
			}
		}),
		require('tailwindcss-animate'),
		require('vidstack/tailwind.cjs')({
			prefix: 'media',
			webComponents: true
		}),
		customVariants
	]
} satisfies Config;

function customVariants({ addVariant, matchVariant }) {
	// Strict version of `.group` to help with nesting.
	matchVariant('parent-data', (value) => `.parent[data-${value}] > &`);

	addVariant('hocus', ['&:hover', '&:focus-visible']);
	addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
}
