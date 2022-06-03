<script>
  import { onMount } from "svelte"
  import get from "lodash/get.js"
  export let item = {}

  // __ VARIABLES
  let linkEl = {}
  let isDesktop = {}
  let linkUrl = item.fullPage
    ? "/research-feed/" + get(item, "slug.current", "")
    : item.link

  const toolTipConfig = {
    content: "",
    arrow: false,
    offset: [0, -20],
    followCursor: "horizontal",
    theme: "research",
    delay: [300, null],
  }

  onMount(async () => {
    isDesktop = window.matchMedia("(min-width: 700px)")
    if (isDesktop.matches) {
      console.log(item)
      const config = toolTipConfig
      config.content = item.date
      tippy(linkEl, config)
    }
  })
</script>

<a bind:this={linkEl} href={linkUrl} class="research-feed-item">
  <div class="title">* {item.title}</div>
  {#if item.source}
    <div class="source">{item.source}<span class="icon">↗</span></div>
  {/if}
</a>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .research-feed-item {
    border-bottom: 1px solid white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .icon {
      position: relative;
      top: -3px;
      left: 5px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .source {
      font-size: 12px;
      @include screen-size("small") {
        display: none;
      }
    }
  }

  .pop-up {
    background: var(--background-color);
    padding: 10px;
    border: 1px solid white;
    z-index: 1000;
    color: white;
    position: relative;
    display: none;
    max-width: 360px;

    .show {
      display: block;
    }
  }

  :global(.pop-up.show) {
    display: flex !important;
  }
</style>
