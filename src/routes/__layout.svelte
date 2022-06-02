<script>
  import Footer from "$lib/components/footer.svelte"
</script>

<main>
  <slot />
  <Footer />
</main>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  :root {
    --background-color: #ff3d00;
  }

  * {
    box-sizing: border-box;
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
</style>
