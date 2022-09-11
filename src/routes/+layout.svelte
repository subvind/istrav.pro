<script lang="ts">
  import { onMount } from 'svelte';
	
  import { backend, sidebarVisibility, sidebarActive, sidebarMode } from '../stores.js';
  import pro from 'fleet-optimizer'

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

    setTimeout(async () => {
      let fleetOptimizer = pro.FleetOptimizer.getInstance()
      let database = await fleetOptimizer.database(pro.database.browser)
    }, 0)
  })
</script>

{#if loading}
  <!-- do nothing -->
{:else}
  <Header isOpen={sidebarIsOpen}/>
  <div class="layout row">
    <div class="silo col s12 l3 xl3">
      <Navigation active={sidebarActiveId} mode={sidebarModeId} isOpen={sidebarIsOpen} />
    </div>
    <div class="silo col s12 l9 xl9" style={sidebarIsOpen ? '' : 'width: 100%;'}>
      <div class="content">
        <slot></slot>
      </div>
      <Credits />
    </div>
  </div>
  <!-- <div class="detail" style={sidebarIsOpen ? 'padding-left: calc(300px);' : 'padding-left: 0;'}>
    <Header isOpen={sidebarIsOpen}/>
    <div class="content">
      <slot></slot>
    </div>
    <Credits />
  </div> -->
{/if}

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
  
  :global(body) {
    background-color: #f4f4f4;
  }

  .layout {
    margin: 0;
  }

  .layout .silo {
    padding: 0;
    overflow: hidden;
  }

  .detail {
    overflow: hidden;
  }

  .content {
    min-height: 100vh;
  }
</style>