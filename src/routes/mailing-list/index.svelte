<script>
  import MailingListForm from "$lib/components/mailing-list-form.svelte"
</script>

<div class="mailing-list">
  <div class="header">MAILING LIST</div>
  <MailingListForm />
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .header {
    margin-bottom: 40px;
  }

  .mailing-list {
    width: 900px;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    min-height: 80vh;
  }
</style>
