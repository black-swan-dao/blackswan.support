<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  import get from "lodash/get.js"
  export let researchFeed
  export let page
</script>

<h1>Research feed</h1>

{#if has(page, "content.content")}
  <div class="about">
    {@html renderBlockText(page.content.content)}
  </div>
{/if}

{#if researchFeed}
  <div class="research-feed">
    {#each researchFeed as item}
      <div class="item">
        {#if item.fullPage}
          <a
            href={"research-feed/" + get(item, "slug.current", "")}
            sveltekit:prefetch
            class="title"
          >
            <img
              src={urlFor(item.mainImage.asset)
                .quality(90)
                .width(180)
                .height(180)
                .url()}
            />
            {item.title}
          </a>
        {:else}
          <a href={item.link} target="_blank" sveltekit:prefetch class="title">
            <img
              src={urlFor(item.mainImage.asset)
                .quality(90)
                .width(180)
                .height(180)
                .url()}
            />
            {item.title}
          </a>
        {/if}
      </div>
    {/each}
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

  .research-feed {
    border-top: 1px solid white;

    .item {
      margin-bottom: 1rem;
      border-bottom: 1px solid white;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>
