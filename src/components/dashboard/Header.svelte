<script lang="ts">
  import { onMount } from "svelte";



  onMount(() => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  })
</script>
<nav>
  <div class="nav-wrapper black">
    <a href="/dashboard" class="brand-logo" style="margin-left: 0.5em;"><i class="material-icons">show_chart</i>FleetOptimizer</a>
    <ul class="right hide-on-med-and-down">
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">By Vehicle<i class="material-icons right">arrow_drop_down</i></a></li>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">By Professional<i class="material-icons right">arrow_drop_down</i></a></li>
      <ul id="dropdown2" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
    </ul>
  </div>
</nav>