<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  import { fade } from "svelte/transition"
  export let page
  let authorList = false
  let tagList = false

  if (page.authors && page.authors.length > 0) {
    authorList = page.authors
      .reduce((acc, author) => {
        return acc + `${author}, `
      }, "")
      .slice(0, -2)
  }

  if (page.tags && page.tags.length > 0) {
    tagList = page.tags
      .reduce((acc, tag) => {
        return acc + "[" + tag + "] "
      }, "")
      .slice(0, -1)
  }
</script>

<div class="single">
  <div class="return" in:fade={{ duration: 200 }}>
    <a href="/" sveltekit:prefetch class="back">←</a>
  </div>

  <div class="header" in:fade={{ duration: 200, delay: 200 }}>
    <!-- TITLE -->
    <h1>* {page.title}</h1>
    <!-- AUTHORS -->
    {#if authorList}
      <div class="authors">
        _ {authorList}
      </div>
    {/if}
    <!-- DATE -->
    {#if page.date}
      <div class="date">_ {page.date}</div>
    {/if}
    <!-- TAGS -->
    {#if tagList}
      <div class="tags">
        _ {tagList}
      </div>
    {/if}
  </div>

  {#if has(page, "content.content")}
    <div class="content" in:fade={{ duration: 200, delay: 400 }}>
      {#if has(page, "mainImage.asset")}
        <img src={urlFor(page.mainImage.asset).quality(90).width(800).url()} />
      {/if}
      {@html renderBlockText(page.content.content)}
    </div>
  {/if}
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
    padding-left: 40px;
    padding-right: 40px;

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
  .header {
    padding: 40px;
    border-top: 1px solid black;

    border-bottom: 1px solid black;

    @include screen-size("small") {
      padding: 20px;
    }
  }

  .content {
    padding: 40px;

    @include screen-size("small") {
      padding: 20px;
    }

    img {
      max-width: 100%;
      max-height: 600px;
    }
  }
</style>
