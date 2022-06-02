<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import get from "lodash/get.js"
  import { fade } from "svelte/transition"
  export let researchFeed
</script>

<div class="single">
  <div class="return" in:fade={{ duration: 200 }}>
    <a href="/" sveltekit:prefetch class="back">←</a>
  </div>

  <div class="research-feed">
    <div class="inner">
      <div class="item header">
        <span class="title">** Research feed **</span>
      </div>
      {#each researchFeed as item}
        {#if item.fullPage}
          <a
            href={"research-feed/" + get(item, "slug.current", "")}
            sveltekit:prefetch
            class="item link"
          >
            <div class="title">* {item.title}</div>
          </a>
        {:else}
          <a href={item.link} target="_blank" class="item link">
            <div class="title">* {item.title}</div>
            {#if item.source}
              <div class="source">{item.source}<span class="icon">↗</span></div>
            {/if}
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .single {
    width: 900px;
    max-width: 95vw;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }

  .return {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    .back {
      display: inline-block;
      padding-left: 20px;
      padding-right: 20px;
      color: inherit;
      text-align: center;
      line-height: 25px;
      font-family: $NORMY;
      background: transparent;
      color: black;
      font-size: 16px;
      margin-bottom: 10px;
      height: 30px;
      border: none;
      border: 1px solid black;
      cursor: pointer;
      transition: background 0.3s $transition;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    @include screen-size("small") {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .research-feed {
    margin-top: 20px;
    color: black;
    user-select: none;
    border-top: 1px solid black;

    @include screen-size("small") {
      margin-top: 40px;
    }

    .inner {
      width: 900px;
      max-width: 95vw;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 40px;
    }

    .item {
      border-bottom: 1px solid black;
      padding: 20px;
      display: flex;
      justify-content: space-between;

      &.link {
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }

      .source {
        font-size: 12px;
      }

      &.header {
        text-transform: uppercase;
      }
    }
  }
</style>
