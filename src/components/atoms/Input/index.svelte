<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let value;
  const input = () => {
    dispatch("inputValue", {
      value,
    });
  };
  type InputSize = "sm" | "md" | "lg";
  const className: InputSize = "sm";
</script>

<input type="number" class={className} bind:value on:input={input} />

<style>
  .sm {
    @apply px-0 py-2 text-lg border border-gray-400 rounded-md text-center;
    width: 64px;
  }
  .sm:focus {
    @apply outline-none ring-1 ring-svelte-light border-svelte-light;
  }
</style>
