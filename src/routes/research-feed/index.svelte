<script>
  import Select from "svelte-select"
  import slugify from "slugify"
  import FullFeedItem from "$lib/components/full-feed-item.svelte"
  import Metadata from "$lib/components/metadata.svelte"
  import { fade } from "svelte/transition"
  import flatten from "lodash/flatten.js"
  import uniq from "lodash/uniq.js"
  export let researchFeed

  let filteredFeed = researchFeed

  const tags = uniq(
    flatten(
      researchFeed.map(item =>
        item.tags && Array.isArray(item.tags) ? [...item.tags] : []
      )
    )
  )

  let items = tags.map(t => {
    return {
      label: t,
      value: slugify(t, { lower: true }),
    }
  })

  let filterTerm = undefined
  $: if (filterTerm) {
    history.pushState(null, null, "#" + filterTerm.value)
    filteredFeed = researchFeed.filter(item => {
      return item.tags && Array.isArray(item.tags)
        ? item.tags.includes(filterTerm.label)
        : false
    })
  } else {
    filteredFeed = researchFeed
  }

  const handleSelect = event => (filterTerm = event.detail)
  const handleClear = () => (filterTerm = undefined)
</script>

<Metadata />

<div class="single">
  <div class="return" in:fade={{ duration: 200 }}>
    <a href="/" sveltekit:prefetch class="back">←</a>
  </div>

  <div class="research-feed">
    <div class="inner">
      <div class="item header">
        <div class="title">** Research feed **</div>
        <div class="filter themed">
          <Select
            placeholder="Filter ↓"
            {items}
            on:select={handleSelect}
            on:clear={handleClear}
          />
        </div>
        <!-- <div class="filter">Filter<span class="arrow-down">↓</span></div> -->
      </div>
      {#each filteredFeed as item (item._id)}
        <FullFeedItem {item} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .themed {
    --border: 1px solid black;
    --borderRadius: 0px;
    --placeholderColor: black;
    --background: var(--background-color);
    --borderFocusColor: black;
    --borderHoverColor: black;
    --itemHoverBG: rgba(200, 200, 200, 1);
    --listBorderRadius: 0px;
    --itemIsActiveBG: rgba(180, 180, 180, 1);
    --clearSelectColor: black;
    --clearSelectFocusColor: black;
    --clearSelectHoverColor: black;
    --clearSelectWidth: 15px;
  }

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
    padding-left: 20px;
    padding-right: 20px;

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
      user-select: none;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    @include screen-size("small") {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .research-feed {
    margin-top: 20px;
    color: black;
    user-select: none;
    border-top: 1px solid black;

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
      border-bottom: 1px solid black;
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
        .title {
          text-transform: uppercase;
        }
        .filter {
          font-size: 12px;
          min-width: 16ch;
          cursor: pointer;
          .arrow-down {
            margin-left: 4px;
          }
        }
      }
    }
  }
</style>
