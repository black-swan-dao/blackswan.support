<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  export let page
  console.log(page)
</script>

<h1>{page.title}</h1>

{#if has(page, "mainImage.asset")}
  <div class="image">
    <img src={urlFor(page.mainImage.asset).quality(90).width(800).url()} />
  </div>
{/if}

{#if has(page, "content.content")}
  <div class="about">
    {@html renderBlockText(page.content.content)}
  </div>
{/if}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  image {
    img {
      max-width: 100%;
    }
  }
</style>
