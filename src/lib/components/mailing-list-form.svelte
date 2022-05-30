<div class="form">
  <input type="email" placeholder="Email address" />
  <button>Subscribe</button>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      font-family: $NORMY;
      background: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      margin-bottom: 20px;
      height: 50px;
      outline: none;
      border: none;
      padding-left: 10px;
    }

    button {
      width: 100%;
      font-family: $NORMY;
      background: transparent;
      color: black;
      font-size: 16px;
      margin-bottom: 10px;
      height: 50px;
      border: none;
      border: 1px solid black;
      cursor: pointer;
      transition: background 0.3s $transition;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
</style>
