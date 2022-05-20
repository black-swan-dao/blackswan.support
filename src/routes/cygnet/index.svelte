<script>
  import { renderBlockText } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  export let page
</script>

<h1>CYGNET</h1>

{#if has(page, "content.content")}
  <div class="about">
    {@html renderBlockText(page.content.content)}
  </div>
{/if}

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
