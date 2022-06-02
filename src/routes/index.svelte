<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  import MailingListForm from "$lib/components/mailing-list-form.svelte"
  import { fade } from "svelte/transition"
  import has from "lodash/has.js"
  import get from "lodash/get.js"
  export let page
  export let researchFeed
</script>

<div class="above-fold">
  <div class="inner" in:fade={{ duration: 200 }}>
    <!-- BYLINE -->
    {#if has(page, "byline")}
      <div class="byline">
        <span class="logo">BLACK SWAN</span> is a Berlin-based collective
        pursuing horizontal and decentralized approaches to the traditional art
        world templates for art making.
        <a href="/about" sveltekit:prefetch class="more-button">→</a>
      </div>
    {/if}

    <!-- CALL-TO-ACTION -->
    <div class="call-to-action" in:fade={{ duration: 200, delay: 200 }}>
      <div class="mailing-list">
        <div class="header">Mailing list</div>
        <MailingListForm />
      </div>
      <div class="cygnet">
        <div class="header">
          Cygnet is Vivamus magna justo, lacinia eget consectetur sed, convallis
          at tellus.
        </div>
        <a href="https://cyg.network" target="_blank" class="link">
          Go to Cygnet<span class="icon">↗</span>
        </a>
      </div>
    </div>

    <div class="links" in:fade={{ duration: 200, delay: 400 }}>
      <a href="https://discord.com" target="_blank" class="item discord">
        Discord<span class="icon">↗</span>
      </a>
      <a
        href="https://twitter.com/blackswan_dao"
        target="_blank"
        class=" item twitter"
      >
        Twitter<span class="icon">↗</span>
      </a>
    </div>
  </div>
</div>

{#if researchFeed}
  <div class="research-feed">
    <div class="inner" in:fade={{ duration: 200, delay: 600 }}>
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
      <div class="item link">
        <div class="title">. . . Load more</div>
      </div>
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

  .icon {
    position: relative;
    top: -3px;
    left: 5px;
  }

  .above-fold {
    background-color: var(--background-color);
    background-image: url("/dust.png");

    .inner {
      width: 900px;
      max-width: 95vw;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .byline {
    font-family: $STACK;
    font-family: $NORMY;
    font-size: 36px;
    line-height: 1.1em;
    word-spacing: -0.2em;
    user-select: none;
    border-bottom: 1px solid black;
    padding: 40px;

    @include screen-size("small") {
      font-size: 26px;
      padding: 20px;
    }
  }

  .call-to-action {
    display: flex;
    border-bottom: 1px solid black;

    @include screen-size("small") {
      flex-wrap: wrap;
    }

    .mailing-list {
      width: 50%;
      border-right: 1px solid black;
      padding: 40px;

      @include screen-size("small") {
        width: 100%;
        border-right: unset;
        border-bottom: 1px solid black;
        min-height: unset;
        padding: 20px;
      }

      .header {
        margin-bottom: 10px;
      }
    }

    .cygnet {
      width: 50%;
      padding: 40px;

      .header {
        margin-bottom: 10px;
      }

      .link {
        display: block;
        color: inherit;
        text-align: center;
        line-height: 50px;
        width: 100%;
        font-family: $NORMY;
        background: transparent;
        color: black;
        font-size: 16px;
        margin-bottom: 10px;
        height: 50px;
        border: none;
        border: 1px solid black;
        cursor: pointer;
        transition: background 0.3s $transition;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }

      @include screen-size("small") {
        width: 100%;
        min-height: unset;
        padding: 20px;
      }
    }
  }

  .links {
    display: flex;
    border-bottom: 1px solid black;
    user-select: none;

    .item {
      width: 50%;
      padding: 40px;
      display: block;
      color: inherit;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      &.discord {
        border-right: 1px solid black;
      }

      @include screen-size("small") {
        padding: 20px;
      }
    }
  }

  .research-feed {
    margin-top: 60px;
    background: black;
    color: white;
    background-image: url("/dust.png");
    user-select: none;

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
      border-bottom: 1px solid white;
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

  .more-button {
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid black;
    color: black;
    font-size: 16px;
    display: none;
    // border-radius: 20px;
    // position: relative;
    // top: -10px;
    // display: none;
  }
</style>
