<script lang="ts">
  import Text from "../../atoms/Text/index.svelte";
  export let radius = 100;
  export let coordinate = 200;
  const circumference = `${2 * Math.PI * radius}`;
  export let angle: "--" | number;
  // export let color = "svelte";
  export let className = "svelte";

  export let progress = 0;
</script>

<div id="chart">
  <svg id="donuts">
    <circle id="base" cx={coordinate} cy={coordinate} r={radius} />
    <circle
      id="line"
      class={className}
      cx={coordinate}
      cy={coordinate}
      r={radius}
      style:--progress={progress}
      style:--circumference={circumference}
    />
  </svg>
  <div class="inner-text">
    <h3 class="inner-value text-8xl font-sans font-semibold">
      <Text>{angle}<span class="text-2xl">度</span></Text>
    </h3>
  </div>
</div>

<style>
  #chart {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #donuts {
    position: relative;
    width: 400px;
    height: 400px;
    transform: rotate(-90deg);
  }
  .inner-text {
    position: absolute;
    justify-content: center;
  }

  circle {
    fill: none;
    stroke: #eee;
    stroke-width: 25;
    stroke-linecap: round;
    stroke-dasharray: var(--circumference);
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  .teal {
    @apply stroke-teal-600;
  }
  #line {
    stroke: #ff3e00;
    stroke-dasharray: var(--circumference);
    stroke-dashoffset: var(--circumference);
    transition: stroke-dashoffset 2s ease-out;
  }
  #line.animation-reset {
    transition: unset;
  }
  #line.animation {
    stroke-dashoffset: calc(
      var(--circumference) - (var(--circumference) * var(--progress)) / 100
    );
  }

  @keyframes dash {
    to {
      stroke-dashoffset: calc(
        var(--circumference) - (var(--circumference) * var(--progress)) / 100
      );
    }
  }
</style>
