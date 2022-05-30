<script>
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
    font-family: $NORMY;
    background-color: rgb(183, 255, 0);
    background-image: url(stardust.png);
    // background-attachment: fixed;
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
</style>
