<script>
  import get from "lodash/get.js"
  export let item = {}
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
</script>

<a href={linkUrl} {target} class="full-feed-item">
  <div class="top-row">
    <div class="title">* {item.title}</div>
    {#if item.source}
      <div class="source">{item.source}<span class="icon">↗</span></div>
    {/if}
  </div>
  <!-- {#if authorList || tagList} -->
  <div class="bottom-row">
    <div class="author">
      {#if authorList}
        _ <span class="inner">{authorList}</span>
      {/if}
    </div>
    {#if tagList}
      <div class="tags">{tagList}</div>
    {/if}
  </div>
  <!-- {/if} -->
</a>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .full-feed-item {
    border-bottom: 1px solid rgb(65, 63, 63);
    padding: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .top-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
    }

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

    .title {
      //   font-weight: bold;
    }

    .author {
      .inner {
        font-size: 12px;
      }
    }

    .tags {
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
