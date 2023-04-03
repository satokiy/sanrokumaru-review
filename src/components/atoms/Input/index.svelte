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
    @apply rounded-md border border-gray-400 px-0 py-2 text-center text-lg;
    width: 64px;
  }
  .sm:focus {
    @apply border-svelte-light outline-none ring-1 ring-svelte-light;
  }
</style>
