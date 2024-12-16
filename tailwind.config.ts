import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			boxShadow: {
				sm: '1px 1px 2px 0 rgb(0 0 0 / 0.08)',
				glass: '0 4px 6px rgb(255 255 255 / 0.92)'
			}
		}
	},

	plugins: [containerQueries]
} satisfies Config;
