<script>
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"
  import { loadData } from "$lib/modules/sanity.js"
  import Footer from "$lib/components/footer.svelte"
  import get from "lodash/get.js"

  const changeThemeColor = color => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]")
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color)
    }
  }

  const setThemeColors = color => {
    let root = document.documentElement
    if (root.style) {
      root.style.setProperty("--background-color", color)
      changeThemeColor(color)
    }
  }

  let settings = false
  onMount(async () => {
    settings = await loadData("*[_id == 'settings'][0]")
    setThemeColors(get(settings, "backgroundColor.hex", "#ff3c00;"))
  })
</script>

{#if settings}
  <main in:fade={{ duration: 200, delay: 200 }}>
    <slot />
    <Footer />
  </main>
{/if}

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  input[type="text"] {
    font-family: $NORMY;
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
    }
  }

  :root {
    --background-color: #000000;
  }

  * {
    box-sizing: border-box;
  }

  figure {
    margin: 0;
  }

  img,
  iframe {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  .embed-container {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
  }

  .content {
    h1,
    h2,
    h3,
    h4 {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 1em;
      margin-top: 1em;
    }
  }

  body,
  html {
    font-family: $NORMY;
    background-color: var(--background-color);
    background-image: url("/dust.png");
    color: white;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .byline {
    p {
      margin: 0.5em;
      @include screen-size("small") {
        padding: 0;
        margin: 0;
      }
    }
  }

  .tippy-box[data-theme~="research"] {
    background: black;
    border-radius: 0;
    padding: 5px 5px;
    color: white;
    font-size: 12px;
    border: 1px solid white;
    z-index: 100;
  }
</style>
