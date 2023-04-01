<script>
  import Text from "../../atoms/Text/index.svelte";
  export let radius = 100;
  export let coordinate = 200;
  export const circumference = `${2 * Math.PI * radius}`;
  const angle = '100';
  export let color = "teal"
</script>

<div id="chart">
  <svg id="donuts">
    <circle id="base" cx={coordinate} cy={coordinate} r={radius} />
    <circle id="line" class={color} cx={coordinate} cy={coordinate} r={radius} />
  </svg>
  <div class="inner-text">
    <h3 class="inner-value text-8xl font-sans font-semibold">
      <Text>{angle}<span class="text-2xl">度</span></Text>
    </h3>
  </div>
</div>

<style>
  :root {
    --circumference: 1000px;
    --progress: 50;
  }
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
    animation: dash 2s ease-in-out forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: calc(
        var(--circumference) - (var(--circumference) * var(--progress)) / 100
      );
    }
  }
</style>
