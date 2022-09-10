<script lang="ts">
  import { onMount } from 'svelte';

  import { backend, sidebarActive, sidebarMode } from '../../stores';
  import Map from '../../components/Map.svelte'

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarMode.set('')
  sidebarActive.set('')
</script>

<Map />
<div class="container" style="margin-top: -10px;">
  <div class="card">
    <div class="card-content">
      <div style="text-align: center; margin-top: -3.3em;">
        <a class="btn-large waves-effect waves-light blue lighten-2" style="z-index: 10000000;"><i class="material-icons">dashboard</i></a>
      </div>
      <br />
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
  </div>
</div>
<br />
<br />
<br />