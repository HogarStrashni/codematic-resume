import type { ClassValue } from 'svelte/elements';

import Download from './download.svelte';
import FileText from './file-text.svelte';
import Github from './github.svelte';
import Link from './link.svelte';
import Linkedin from './linkedin.svelte';
import MailOpen from './mail-open.svelte';
import Phone from './phone.svelte';
import Printer from './printer.svelte';

type IconProps = { class?: ClassValue };

export { Download, FileText, Github, type IconProps,Link, Linkedin, MailOpen, Phone, Printer };
