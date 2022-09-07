<script lang="ts">
  import { onMount } from 'svelte';
	import { backend, sidebarVisibility, sidebarActive, sidebarMode } from '../stores.js';
  import Navigation from "../components/Navigation.svelte"
  import Credits from "../components/Credits.svelte"
  import Header from "../components/Header.svelte"

  let loading = true
  let api = ''
  backend.subscribe(value => {
		api = value
	})
  let sidebarIsOpen = false
  sidebarVisibility.subscribe(value => {
		sidebarIsOpen = value
	})
  let sidebarActiveId = 'it-panel'
  sidebarActive.subscribe(value => {
		sidebarActiveId = value
	})
  let sidebarModeId = 'main'
  sidebarMode.subscribe(value => {
		sidebarModeId = value
	})
  
  onMount(() => {
    backend.set(`https://pro.istrav.dev`)

    loading = false
  })
</script>

{#if loading}
  <!-- do nothing -->
{:else}
  <Navigation active={sidebarActiveId} mode={sidebarModeId} isOpen={sidebarIsOpen} />
  <div class="detail" style={sidebarIsOpen ? 'padding-left: calc(300px);' : 'padding-left: 0;'}>
    <Header isOpen={sidebarIsOpen}/>
    <div class="content">
      <slot></slot>
    </div>
    <Credits />
  </div>
{/if}

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  
  :global(body) {
    background-color: #f4f4f4;
  }

  .detail {
    overflow: hidden;
  }

  .content {
    min-height: 100vh;
  }
</style>