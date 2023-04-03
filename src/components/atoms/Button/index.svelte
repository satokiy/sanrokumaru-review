<script lang="ts">
  type ButtonColor = "svelte" | "teal" | "cyan" | "red";
  type MarginBottom = 0 | 4 | 8 | 12 | 16 | 20;
  export let onClick: () => void;
  export let color: ButtonColor = "svelte";
  export const size = "md";
  export let disabled: boolean;
  $: disabledCss = disabled ? "opacity-50 cursor-not-allowed" : "";

  $: className = [color, size, disabledCss].join(" ");
</script>

<button class={className} on:click={onClick}>
  <slot />
</button>

<style lang="scss">
  /**
    * Color
    */
  .teal {
    @apply rounded border-teal-600 bg-teal-600 px-4 py-2 font-sans font-bold text-white shadow-md;
  }
  .teal:hover {
    @apply border-teal-400 bg-teal-400;
  }
  .svelte {
    @apply rounded border-svelte bg-svelte px-4 py-2 font-sans font-bold text-white shadow-md;
  }
  .svelte:hover {
    @apply border-svelte-light bg-svelte-light;
  }

  /**
    * Size
    */
  .sm {
    @apply px-4 py-2 text-sm;
  }
  .md {
    @apply px-6 py-2 text-base;
  }
</style>
