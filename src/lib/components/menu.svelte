<script>
  import { fade } from "svelte/transition"
  let showMenu = false

  const toggleMenu = () => {
    showMenu = !showMenu
  }
</script>

<div class="menu-toggle" on:click={toggleMenu} />

{#if showMenu}
  <div class="menu" transition:fade={{ duration: 200 }} on:click={toggleMenu}>
    <div class="inner">
      <div>
        <a href="/" sveltekit:prefetch>Black Swan</a>
      </div>
      <div>
        <a href="/about" sveltekit:prefetch>About</a>
      </div>
      <div>
        <a href="/cygnet" sveltekit:prefetch>Cygnet</a>
      </div>
      <div>
        <a href="/research-feed" sveltekit:prefetch>Research Feed</a>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .menu-toggle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 100;
    position: fixed;
    top: 20px;
    right: 20px;
    background: black;
    border: 2px solid white;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .menu {
    width: 100vw;
    height: 100vh;
    // border-radius: 50%;
    position: fixed;
    top: 0;
    right: 0;
    // background: blue;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 64px;
  }
</style>
