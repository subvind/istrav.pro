<script lang="ts">
  import { onMount } from 'svelte';

  import { backend, sidebarActive, sidebarMode } from '../../../stores';

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarMode.set('application')
  sidebarActive.set('accounts')
</script>

hello world