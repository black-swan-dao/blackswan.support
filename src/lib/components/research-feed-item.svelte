<script>
  import { onMount } from "svelte"
  import get from "lodash/get.js"
  export let item = {}

  // __ VARIABLES
  let linkEl = {}
  let isDesktop = {}
  const linkUrl = item.fullPage
    ? "/research-feed/" + get(item, "slug.current", "")
    : item.link
  const target = item.fullPage ? "_self" : "_blank"

  let authorList = false
  let tagList = false

  if (item.authors && item.authors.length > 0) {
    authorList = item.authors
      .reduce((acc, author) => {
        return acc + `${author}, `
      }, "")
      .slice(0, -2)
  }

  if (item.tags && item.tags.length > 0) {
    tagList = item.tags
      .reduce((acc, tag) => {
        return acc + "[" + tag + "] "
      }, "")
      .slice(0, -1)
  }

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
      const config = toolTipConfig
      if (authorList) {
        config.content = authorList
      }
      if (item.date) {
        config.content =
          (config.content ? config.content + " / " : "") + item.date
      }
      if (tagList) {
        config.content =
          (config.content ? config.content + " / " : "") + tagList
      }
      if (config.content) {
        tippy(linkEl, config)
      }
    }
  })
</script>

<a bind:this={linkEl} href={linkUrl} {target} class="research-feed-item">
  <div class="title">* {item.title}</div>
  {#if item.source}
    <div class="source">
      {item.source}{#if item.fullPage}<span class="icon">↗</span>{/if}
    </div>
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
    word-spacing: -0.1em;

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
