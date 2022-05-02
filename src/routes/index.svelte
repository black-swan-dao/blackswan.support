<script>
  import { renderBlockText } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  export let page
</script>

<h1>Black Swan</h1>

<hr />

{#if has(page, "introduction.content")}
  <div class="introduction">
    {@html renderBlockText(page.introduction.content)}
  </div>
{/if}

<p><a href="/about" sveltekit:prefetch>About</a></p>

<hr />

{#if has(page, "faq")}
  <div class="faq">
    {#each page.faq as item}
      <div class="item">
        <div class="question">{item.question}</div>
        <div class="answer">{item.answer}</div>
      </div>
    {/each}
  </div>
{/if}

{#if has(page, "contact.content")}
  <div class="contact">
    {@html renderBlockText(page.contact.content)}
  </div>
  <hr />
{/if}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .faq {
    .item {
      margin-bottom: 1rem;

      .question {
        font-weight: bold;
      }
    }
  }
</style>
