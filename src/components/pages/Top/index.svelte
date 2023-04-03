<script lang="ts">
  import Header from "../../organisms/Header/index.svelte";
  import Footer from "../../organisms/Footer/index.svelte";
  import Congratulation from "../../organisms/Congratulation/index.svelte";
  import DonutsChart from "../../molecules/DonutsChart/index.svelte";
  import Button from "../../atoms/Button/index.svelte";
  import Inputfield from "../../atoms/Input/index.svelte";
  import Text from "../../atoms/Text/index.svelte";

  type Angle = "--" | number;

  /**
   * 評価対象の合計人数
   */
  $: total = 0;

  /**
   * 終わった人数
   */
  $: finished = 0;

  /**
   * 進捗
   */
  $: progress = (finished / total) * 100;

  /**
   * 進捗を表示するための値
   */
  $: progressToDisplay = 0;

  /**
   * 角度。事前計算しておく。
   */
  let angle: Angle;
  $: angle = isNaN((finished / total) * 360) ? "--" : (finished / total) * 360;

  /**
   * 角度を表示するための値
   */
  let angleToDisplay: Angle = "--";

  /**
   * ボタンのdisabled
   */
  $: disabled = true;

  /**
   * ドーナツチャートのclass名
   */
  $: className = "";

  /**
   * お祝いを表示するかどうか
   */
  let isCongratulation: boolean = false;
  $: isCongratulation;

  /**
   * yaer
   */
  const year = new Date().getFullYear();

  /**
   * AppName
   */
  const appName = "Sanrokumaru";

  /**
   * 関数
   */
  const countUp = (value: Angle) => {
    if (value === "--") return "--";
    let count = 0;
    const interval = 1500 / value;

    const timer = setInterval(() => {
      count++;
      if (count >= value) {
        clearInterval(timer);
      }
      angleToDisplay = count;
    }, interval);
  };

  const onClick = () => {
    if (disabled) return;
    isCongratulation = false;
    // 進捗を一度リセットしてから、再度表示する
    className = "animation-reset";
    progressToDisplay = 0;

    setTimeout(() => {
      className = "animation";
      progressToDisplay = progress;
      countUp(angle);

      if (progress >= 100) {
        setTimeout(() => {
          isCongratulation = true;
        }, 2000);
      }
    }, 500);
  };
  const calclate = (_e) => {
    if (total == 0 || total == null || finished == null || progress > 100) {
      disabled = true;
    } else {
      disabled = false;
    }
  };
</script>

<Header>360度評価の進捗</Header>
<div class="Top">
  <DonutsChart
    {className}
    radius={160}
    angle={angleToDisplay}
    progress={progressToDisplay}
  />
  <div class="mb-4 text-right w-48">
    <Text
      >全部で <Inputfield bind:value={total} on:inputValue={calclate} /> 人</Text
    >
  </div>
  <div class="mb-8 text-right w-48">
    <Text
      >終わったのは <Inputfield
        bind:value={finished}
        on:inputValue={calclate}
      /> 人</Text
    >
  </div>

  <div class="mb-4">
    <Button {onClick} color="svelte" {disabled}>チェック</Button>
  </div>
</div>
<Footer>{year} - {appName}</Footer>

{#if isCongratulation}
  <Congratulation />
{/if}

<style lang="scss">
  .Top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
