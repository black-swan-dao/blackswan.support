<script>
  import { renderBlockText } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  import slugify from "slugify"
  import { onMount } from "svelte"

  export let page
</script>

<h1>ABOUT</h1>

<hr />

{#if has(page, "introduction.content")}
  <div class="spawnIntroduction">
    {@html renderBlockText(page.spawnIntroduction.content)}
  </div>
{/if}

<hr />

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .spawn {
    .form-section {
      margin-bottom: 1rem;

      .sub-section {
        margin-bottom: 0.5rem;
      }
    }
  }

  .details {
    margin-top: 20px;
    font-size: 10px;
    font-family: "Courier New", Courier, monospace;
    padding: 10px;
    background: lightgray;
  }

  .result-section {
    margin-bottom: 20px;
  }
</style>
