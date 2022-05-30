<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import has from "lodash/has.js"
  import get from "lodash/get.js"
  export let page
  export let researchFeed
</script>

<!-- <h1>Black Swan</h1> -->
<!-- {@html renderBlockText(page.byline.content)} -->

<!-- BYLINE -->
{#if has(page, "byline")}
  <div class="byline">
    <span class="logo">Black Swan</span> is a Berlin-based collective pursuing
    horizontal and decentralized approaches to the traditional art world
    templates for art making.
    <a href="/about" sveltekit:prefetch class="more-button">…</a>
  </div>
{/if}

<!-- CALL-TO-ACTION -->
<div class="call-to-action">
  <div class="mailing-list">
    <div class="header">Mailing list</div>
    <div class="form">
      <input type="email" placeholder="Your email address" />
      <button>Subscribe</button>
    </div>
  </div>
  <div class="cygnet">Go to cygnet</div>
</div>

<div class="links">
  <div class="discord">Discord</div>
  <div class="twitter">Twitter</div>
</div>

{#if researchFeed}
  <div class="research-feed">
    <div class="item">
      <span class="title">Research feed</span>
    </div>
    {#each researchFeed as item}
      <div class="item">
        {#if item.fullPage}
          <a
            href={"research-feed/" + get(item, "slug.current", "")}
            sveltekit:prefetch
            class="title"
          >
            <!-- <img
              src={urlFor(item.mainImage.asset).quality(90).height(120).url()}
            /> -->
            {item.title}
          </a>
        {:else}
          <a href={item.link} target="_blank" class="title">
            <!-- <img
              src={urlFor(item.mainImage.asset).quality(90).height(120).url()}
            /> -->
            {item.title}
          </a>
        {/if}
      </div>
    {/each}
    <div class="item">
      <div class="title">… Load more</div>
    </div>
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

  .byline {
    font-size: 48px;
    line-height: 1em;
    word-spacing: -10px;
    font-weight: bold;
    user-select: none;
    border-bottom: 2px solid white;
    padding-bottom: 40px;
  }

  .call-to-action {
    display: flex;
    border-bottom: 2px solid white;
  }

  .links {
    display: flex;
    border-bottom: 2px solid white;

    .discord {
      width: 50%;
      border-right: 2px solid white;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .twitter {
      width: 50%;
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 40px;
    }
  }

  .mailing-list {
    width: 50%;
    border-right: 2px solid white;
    min-height: 200px;
    padding: 40px;
    padding-left: 0;
  }

  .cygnet {
    width: 50%;
    min-height: 200px;
    padding: 40px;
  }

  .header {
    margin-bottom: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      font-family: "Space Mono", monospace;
      background: rgba(255, 255, 255, 0.9);
      font-size: 24px;
      margin-bottom: 20px;
      height: 50px;
      outline: none;
      border: none;
      padding-left: 10px;
    }

    button {
      width: 100%;
      font-family: "Space Mono", monospace;
      background: transparent;
      color: white;
      font-size: 24px;
      margin-bottom: 10px;
      height: 50px;
      border: none;
      border: 2px solid white;
      cursor: pointer;
    }
  }

  .research-feed {
    margin-top: 60px;

    .item {
      border-bottom: 2px solid white;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 14px;
    }
  }

  .more-button {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    line-height: 25px;
    background: white;
    color: black;
    border-radius: 20px;
    position: relative;
    top: -10px;
  }
</style>
