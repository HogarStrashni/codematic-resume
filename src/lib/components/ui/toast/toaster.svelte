<script lang="ts">
  import { fly } from 'svelte/transition';

  import Typography from '$lib/components/custom-ui/typography';
  import { toast } from '$lib/components/ui/toast/toast.svelte';
  import type { ToastType } from '$lib/types';
  import { cn } from '$lib/utils';

  type Config = {
    icon: string;
    text: string;
  };

  const CONFIG: Record<ToastType, Config> = {
    success: {
      icon: '✓',
      text: 'text-green-700'
    },
    error: {
      icon: '!',
      text: 'text-red-800'
    },
    warning: {
      icon: '⚠',
      text: 'text-yellow-700'
    },
    info: {
      icon: 'i',
      text: 'text-blue-800'
    }
  };
</script>

<section class="fixed top-4 right-0 z-1 flex w-full max-w-96 flex-col gap-4 sm:top-20">
  {#each toast.toasts as item (item.id)}
    <div
      transition:fly={{ x: 100 }}
      class={cn(
        'mx-4 flex gap-3 rounded-lg border border-gray-700 bg-black p-4',
        CONFIG[item.type].text
      )}
    >
      <span class={cn('flex size-5 shrink-0 items-center justify-center')}>
        {CONFIG[item.type].icon}
      </span>
      <Typography variant="textSmall">{item.message}</Typography>
      <button
        onclick={() => toast.dismiss(item.id)}
        class="ml-auto size-5 shrink-0 translate-x-2 -translate-y-2 cursor-pointer rounded-full"
      >
        <div class="text-xs leading-0 text-gray-700">X</div>
      </button>
    </div>
  {/each}
</section>
