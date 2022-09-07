<script lang="ts">
  import { sidebarVisibility } from '../stores';
  
  export let isOpen: boolean;

  let visible: boolean
  sidebarVisibility.subscribe(value => {
		visible = value
	})

  function toggleSidebar() {
    if (visible) {
      sidebarVisibility.set(false)
    } else {
      sidebarVisibility.set(true)
    }
  }
</script>

<div class="navbar-fixed">
  <nav class="white" style={isOpen ? 'width: calc(100% - 300px);' : 'width: 100%;'}>
    <div class="nav-wrapper">
      <ul class="left">
        <a href="#!" on:click={() => toggleSidebar()} class="black-text left"><i class="material-icons left">menu</i></a>
      </ul>
      <a href="#" class="btn transparent black-text"><i class="material-icons left" style="line-height: 34px; margin-right: 5px;">assignment_ind</i> annonymous</a>
      <ul class="right">
        <li><a href="#" class="black-text right"><i class="material-icons left">notifications</i>(2)</a></li>
        <li><a href="#" class="black-text right"><i class="material-icons left">format_list_numbered</i>Work Orders (2)</a></li>
        <li><a href="#" class="black-text right"><i class="material-icons left">local_shipping</i>Transports (0)</a></li>
        <!-- <li><a href="#" class="black-text"><i class="material-icons left">timer</i>10s</a></li>
        <li><a href="#" class="black-text"><i class="material-icons left">format_list_numbered</i>(16)</a></li>
        <li><a href="#" class="black-text"><i class="material-icons left">map</i>8 miles</a></li>
        <li><a href="#" class="black-text"><i class="material-icons left">local_shipping</i>(2)</a></li> -->
      </ul>
    </div>
  </nav>
</div>

<style>
  nav {
    padding: 0 1em;
  }

  nav .material-icons {
    margin-right: 5px;
  }
</style>