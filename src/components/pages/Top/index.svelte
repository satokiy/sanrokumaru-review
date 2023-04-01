<script>
  import Footer from "../../organisms/Footer/index.svelte";
  import Header from "../../organisms/Header/index.svelte";
  import DonutsChart from "../../molecules/DonutsChart/index.svelte";
  import Button from "../../atoms/Button/index.svelte";
  import Inputfield from "../../atoms/Input/index.svelte";
  import Text from "../../atoms/Text/index.svelte";
  const textValue = "";
  const onClick = () => {
    console.log("clicked!");
  };
</script>

<Header>header header header</Header>
<div class="Top">
  <DonutsChart radius={160} />
  <div class="mb-4 text-right w-48">
    <Text>全部で <Inputfield {textValue} /> 人</Text>
  </div>
  <div class="mb-8 text-right w-48">
    <Text>終わったのは <Inputfield {textValue} /> 人</Text>
  </div>

  <div class="mb-4">
    <Button {onClick} color="svelte">角度チェック</Button>
  </div>
</div>
<Footer />

<style lang="scss">
  .Top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
