<script lang="ts">
  import { onMount } from 'svelte';

  import { backend, sidebarActive, sidebarMode } from '../../stores';
  import Map from '../../components/Map.svelte'
  import Header from '../../components/dashboard/Header.svelte'
  import SubHeader from '../../components/dashboard/SubHeader.svelte'

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarMode.set('')
  sidebarActive.set('')
</script>

<Header />
<Map />
<div class="container" style="margin-top: -10px;">
  <div class="card">
    <div style="text-align: center; margin: -2.5em 0 -1.6em 0;">
      <a class="btn-large waves-effect waves-light blue lighten-2" style="z-index: 10000000;"><i class="material-icons">dashboard</i></a>
    </div>
    <SubHeader />
    <div class="card-content">
      <br />
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
</div>
<br />
<br />
<br />