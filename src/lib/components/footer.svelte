<script>
  console.log("footer")
</script>

<footer>
  <div class="item">Black Swan</div>
  <div class="item">Discord</div>
  <div class="item">Twitter</div>
  <div class="item">Mailing list</div>
</footer>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  footer {
    margin-top: 60px;
    margin-bottom: 80px;
    font-size: 14px;
    display: flex;
    // border-top: 4px dotted white;
    // padding-top: 20px;

    .item {
      margin-right: 20px;
    }
  }
</style>
