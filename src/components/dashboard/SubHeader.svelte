<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});


    var elems2 = document.querySelectorAll('.tabs');
    var instances2 = M.Tabs.init(elems2, {});
  })
</script>
<nav class="nav-extended">
  <div class="nav-wrapper black">
    <a href="/fleets/vehicles/" class="brand-logo" style="margin-left: 0.5em;"><i class="material-icons">directions_bus</i>test</a>
    <ul class="right hide-on-med-and-down">
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown3">By Task<i class="material-icons right">arrow_drop_down</i></a></li>
      <ul id="dropdown3" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
    </ul>
  </div>
</nav>
<div style="background: #000; overflow: hidden; padding: 0.5em;">
  <a href="/fleets/tasks" class="left white-text" style="padding: 0.5em;"><i class="material-icons left">local_offer</i>Something Todo</a>
  <a href="#" class="btn white-text right grey darken-4"><i class="material-icons left">local_shipping</i>Transport</a>
</div>
<div class="row">
  <div class="col s12">
    <ul class="tabs black">
      <li class="tab col s3"><a href="#test1">Pickup</a></li>
      <li class="tab col s3"><a class="active" href="#test2">Delivery</a></li>
    </ul>
  </div>
  <div id="test1" class="col s12">Test 1</div>
  <div id="test2" class="col s12">Test 2</div>
</div>
      