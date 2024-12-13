import type { SvelteHTMLElements } from 'svelte/elements';

import MailOpen from './mail-open.svelte';
import Phone from './phone.svelte';
import Linkedin from './linkedin.svelte';
import Github from './github.svelte';

type IconProps = { class?: SvelteHTMLElements['svg']['class'] };

export { MailOpen, Phone, Linkedin, Github, type IconProps };
