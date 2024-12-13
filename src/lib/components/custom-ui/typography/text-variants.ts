import { type VariantProps, cva } from 'class-variance-authority';

export const textVariants = cva('', {
	variants: {
		variant: {
			heading: 'text-2xl sm:text-3xl',
			headingSmall: 'text-xl sm:text-2xl',
			text: 'text-sm sm:text-base',
			textSmall: 'text-xs sm:text-sm',
			caption: 'text-xs'
		},
		fontWeight: {
			light: 'font-light',
			bold: 'font-bold'
		}
	},
	defaultVariants: {
		variant: 'text'
	}
});

export type TextVariantProps = VariantProps<typeof textVariants>;
