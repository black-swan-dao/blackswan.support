<script>
  let textValue = ""
  let gdprValue = false
</script>

<form
  action="https://support.us10.list-manage.com/subscribe/post?u=5560737d8726c5bc03bd083ca&amp;id=10ec37fa14"
  method="post"
  id="mc-embedded-subscribe-form"
  name="mc-embedded-subscribe-form"
  class="validate"
  target="_blank"
  novalidate
>
  <div id="mc_embed_signup_scroll">
    <div class="mc-field-group main-group">
      <input
        type="email"
        bind:value={textValue}
        placeholder="Email address"
        name="EMAIL"
        class="required email"
        id="mce-EMAIL"
      />
    </div>
    <div
      id="mergeRow-gdpr"
      class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
      class:shown={textValue.length > 0}
    >
      <div class="content__gdpr">
        <fieldset
          class="mc_fieldset gdprRequired mc-field-group"
          name="interestgroup_field"
        >
          <label class="checkbox subfield" for="gdpr_33067">
            <input
              type="checkbox"
              id="gdpr_59468"
              name="gdpr[59468]"
              value="Y"
              bind:checked={gdprValue}
              class="av-checkbox gdpr"
            />
            <span
              >By submitting my information I agree to receiving emails from
              Black Swan
            </span>
          </label>
        </fieldset>
      </div>
    </div>
    <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none" />
      <div class="response" id="mce-success-response" style="display:none" />
    </div>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input
        type="text"
        name="b_5560737d8726c5bc03bd083ca_10ec37fa14"
        tabindex="-1"
        value=""
      />
    </div>
    <div class="clear">
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="button submit"
        class:active={gdprValue}
      />
    </div>
  </div>
</form>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  form,
  .form {
    display: flex;
    flex-direction: column;

    fieldset {
      border: 0;
      padding: 0;
      font-size: 12px;
      line-height: 1em;
      margin-bottom: 20px;
    }

    .content__gdprBlock {
      display: none;

      &.shown {
        display: block;
      }
    }

    input[type="email"] {
      width: 100%;
      font-family: $NORMY;
      background: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      margin-bottom: 20px;
      height: 50px;
      outline: none;
      border: none;
      padding-left: 10px;
      border-radius: 0;
    }

    input[type="submit"] {
      width: 100%;
      font-family: $NORMY;
      background: transparent;
      color: black;
      font-size: 16px;
      margin-bottom: 10px;
      height: 50px;
      border: 1px solid black;
      border-radius: 0;
      cursor: pointer;
      transition: background 0.3s $transition;
      pointer-events: none;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      &.active {
        pointer-events: all;
      }
    }
  }
</style>
