<script>
  import Menu from "$lib/components/menu.svelte"
</script>

<Menu />

<main>
  <slot />
</main>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  * {
    box-sizing: border-box;
  }

  body,
  html {
    // font-family: Helvetica, sans-serif;
    font-family: "Space Mono", monospace;
    background: black;
    color: white;
    font-size: 14px;
  }

  main {
    width: 800px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    padding-top: 40px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
