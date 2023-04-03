<script>
  import Text from "../../atoms/Text/index.svelte";
</script>

<header>
  <h1>
   <slot>Header Header</slot>
  </h1>
</header>

<style>
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
