import { MailOpen, Phone, Linkedin, Github } from '$lib/icons';

export const contactInfo = [
	{
		id: 'email',
		text: 'djmatic@agfbl.org',
		href: 'mailto:djmatic@agfbl.org',
		icon: MailOpen
	},
	{
		id: 'phone',
		text: '+387 65 458 362',
		href: 'tel:+387 65 458 362',
		icon: Phone
	},
	{
		id: 'linkedin',
		text: 'https://linkedin.com/in/djordje-matic',
		href: 'https://linkedin.com/in/djordje-matic',
		icon: Linkedin
	},
	{
		id: 'github',
		text: 'https://github.com/hogarstrashni',
		href: 'https://github.com/hogarstrashni',
		icon: Github
	}
];

export type ContactInfo = (typeof contactInfo)[number];
