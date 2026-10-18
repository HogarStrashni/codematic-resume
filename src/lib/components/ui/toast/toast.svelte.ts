import { SvelteMap } from 'svelte/reactivity';

import { browser } from '$app/environment';
import type { Toast, ToastType } from '$lib/types';

const DEFAULT_DURATION = 5000;
const MAX_TOASTS = 3;

export class ToastManager {
  toasts = $state<Toast[]>([]);

  private timers = new SvelteMap<string, ReturnType<typeof setTimeout>>();
  private nextId = 0;

  private show(message: string, type: ToastType, duration: number): string | undefined {
    if (!browser || !message.trim()) {
      return undefined;
    }
    const id = `toast-${Date.now()}-${++this.nextId}`;

    this.toasts.push({ id, message, type });

    // Remove the oldest notifications when over the limit.
    while (this.toasts.length > MAX_TOASTS) {
      const oldest = this.toasts[0];

      if (oldest) {
        this.dismiss(oldest.id);
      }
    }

    if (duration > 0) {
      const timer = setTimeout(() => {
        this.dismiss(id);
      }, duration);

      this.timers.set(id, timer);
    }

    return id;
  }

  private clearTimer(id: string) {
    const timer = this.timers.get(id);

    if (timer !== undefined) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
  }

  success(message: string, duration = DEFAULT_DURATION) {
    return this.show(message, 'success', duration);
  }

  error(message: string, duration = DEFAULT_DURATION) {
    return this.show(message, 'error', duration);
  }

  warning(message: string, duration = DEFAULT_DURATION) {
    return this.show(message, 'warning', duration);
  }

  info(message: string, duration = DEFAULT_DURATION) {
    return this.show(message, 'info', duration);
  }

  dismiss(id: string) {
    this.clearTimer(id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
}

export const toast = new ToastManager();
