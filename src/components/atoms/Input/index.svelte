<script lang="ts">
  export let textValue;
  const className = "sm";
</script>

<input type="number" class={className} bind:value={textValue} />

<style>
  .sm {
    @apply px-0 py-2 text-lg border border-gray-400 rounded-md;
    width: 64px;
  }
  .sm:focus {
    @apply outline-none ring-1 ring-svelte-light border-svelte-light;
  }
</style>
