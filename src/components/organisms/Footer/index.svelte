<script>
  import Text from "../../atoms/Text/index.svelte";
  const year = new Date().getFullYear();
  const appName = "sanrokumaru";
</script>

<footer>
  <Text>
    <slot>{year} — {appName} All Rights Reserved.</slot>
  </Text>
</footer>
