<footer>
  <a href="/" sveltekit:prefetch class="item"> BLACK SWAN</a>
  <a href="https://discord.com" target="_blank" class="item">Discord</a>
  <a href="https://twitter.com/blackswan_dao" target="_blank" class="item">
    Twitter
  </a>
  <a href="/mailing-list" sveltekit:prefetch class="item mailing-list">
    Mailing list
  </a>
</footer>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  footer {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    user-select: none;

    width: 900px;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid black;
    padding: 20px;

    .item {
      margin-right: 20px;
      display: block;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &.mailing-list {
        @include screen-size("small") {
          display: none;
        }
      }
    }
  }
</style>
