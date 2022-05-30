<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  import { fade } from "svelte/transition"
  export let page
</script>

<div class="single">
  <div class="header" in:fade={{ duration: 200 }}>{page.title}</div>

  {#if has(page, "content.content")}
    <div class="about" in:fade={{ duration: 200, delay: 400 }}>
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

  .header {
    padding: 40px;
    border-bottom: 1px solid black;

    @include screen-size("small") {
      padding: 20px;
    }
  }

  .about {
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
