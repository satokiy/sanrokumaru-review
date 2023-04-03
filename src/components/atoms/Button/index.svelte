<script lang="ts">
  type ButtonColor = "svelte" | "teal" | "cyan" | "red";
  type MarginBottom = 0 | 4 | 8 | 12 | 16 | 20;
  export let onClick: () => void;
  export let color: ButtonColor = "svelte";
  export const size = "md";
  export let disabled: boolean;
  $:disabledCss = disabled ? "opacity-50 cursor-not-allowed" : "";

  $:className = [color, size, disabledCss].join(" ");
</script>

<button class={className} on:click={onClick}>
  <slot />
</button>

<style lang="scss">
  /**
    * Color
    */
  .teal {
    @apply font-bold font-sans py-2 px-4 rounded bg-teal-600 text-white shadow-md border-teal-600;
  }
  .teal:hover {
    @apply bg-teal-400 border-teal-400;
  }
  .svelte {
    @apply font-bold font-sans py-2 px-4 rounded bg-svelte text-white shadow-md border-svelte;
  }
  .svelte:hover {
    @apply bg-svelte-light border-svelte-light;
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
