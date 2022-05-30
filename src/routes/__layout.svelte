<script>
  import Menu from "$lib/components/menu.svelte"
  import Footer from "$lib/components/footer.svelte"
</script>

<!-- <Menu /> -->

<main>
  <slot />
  <Footer />
</main>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  * {
    box-sizing: border-box;
  }

  body,
  html {
    font-family: "Space Mono", monospace;
    background: black;
    color: white;
    font-size: 24px;
  }

  main {
    width: 900px;
    max-width: 90vw;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding-top: 60px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
