<script>
  export let inverted = false
</script>

<footer class:inverted>
  <div class="left">
    <a href="/" sveltekit:prefetch class="item">Black Swan</a>
    <a href="https://discord.gg/bX5HF98PeF" target="_blank" class="item">
      Discord
    </a>
    <a href="https://twitter.com/blackswan_dao" target="_blank" class="item">
      Twitter
    </a>
    <a
      href="https://www.instagram.com/blackswan_dao/"
      target="_blank"
      class="item"
    >
      Instagram
    </a>
    <a href="https://www.are.na/black-swan-dao" target="_blank" class="item">
      Are.na
    </a>

    <a href="/mailing-list" sveltekit:prefetch class="item mailing-list">
      Mailing list
    </a>
  </div>
  <div class="right">
    <a href="/faq" sveltekit:prefetch class="item">FAQ</a>
  </div>
</footer>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  footer {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    user-select: none;
    width: 900px;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid black;
    color: black;
    padding-top: 20px;
    padding-bottom: 20px;
    padding: 20px;
    font-size: 12px;

    &.inverted {
      border-top: 1px solid white;
      color: white;
    }

    @include screen-size("small") {
      flex-direction: column;
    }

    .left {
      display: flex;

      .item {
        margin-right: 20px;
      }
    }

    .right {
      display: flex;
    }

    .item {
      display: block;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
