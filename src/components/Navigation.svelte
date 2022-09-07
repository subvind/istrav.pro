<script lang="ts">
  import { onMount } from "svelte";

  import axios from 'axios'
  import { parseJwt } from '../parseJwt'
  import { backend } from '../stores'

  let token: any
  let api: any
  backend.subscribe(value => {
		api = value
	})

  let instances: any
  let collapsibleInstances: any
  let version: any
  export let active: any
  export let mode: any
  export let isOpen: any
  $: { reMount(isOpen) }
  function reMount (value: any) {
    console.log('remount', value)
    if (instances) {
      if (value) {
        instances[0].open()
      } else {
        instances[0].close()
      }
    }
  }

  onMount(() => {
    let tokenCode = localStorage.getItem('token')
    if (tokenCode) {
      token = parseJwt(tokenCode)
      console.log('token', token)
    }

    var elems = document.querySelectorAll('.sidenav');
    instances = window['M'].Sidenav.init(elems, {
      isOpen: true,
      isFixed: true
    });
    if (isOpen) {
      instances[0].open()
    }

    var collapsibleElems = document.querySelectorAll('.collapsible');
    collapsibleInstances = window['M'].Collapsible.init(collapsibleElems, {});
  })

  function toggleMode(name: string, index: number) {
    // default to close all
    for (let i = 0; i < 10; i++) {
      collapsibleInstances[0].close(i)
    }

    if (mode == name) {
      mode = ''
      setTimeout(() => collapsibleInstances[0].close(index), 0)
      console.log('close', name)
    } else if (mode == '') {
      mode = name
      setTimeout(() => collapsibleInstances[0].open(index), 0)
      console.log('open', name)
    } else {
      // mode != name
      mode = name
      setTimeout(() => {
        collapsibleInstances[0].open(index)
      }, 0)
    }
  }
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 300px;">
  
  <nav class="light-blue">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo center black-text" style="min-width: 150px;">isTrav Pro</a>
    </div>
  </nav>
        
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <ul class="collapsible">
    <li class={mode === 'application' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('application', 0)}><i class={`material-icons`}>apps</i>APPLICATION <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'application' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">        
        <li class={active === 'intro' ? 'active' : null}><a href="/" on:click={() => {active = 'intro'}} class="waves-effect"><i class={`material-icons`}>power_settings_new</i>Intro</a></li>
        <li class={active === 'tenant' ? 'active' : null}><a href="/tenant" on:click={() => {active = 'tenant'}} class="waves-effect"><i class={`material-icons`}>business</i>Tenant</a></li>
        <li class={active === 'accounts' ? 'active' : null}><a href="/accounts" on:click={() => {active = 'accounts'}} class="waves-effect"><i class={`material-icons`}>assignment_ind</i>Accounts</a></li>
        <li class={active === 'reports' ? 'active' : null}><a href="/reports" on:click={() => {active = 'reports'}} class="waves-effect"><i class={`material-icons`}>receipt</i>Reports</a></li>
      </div>
    </li>
    <li class={mode === 'business' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('business', 1)}><i class={`material-icons`}>work</i>BUSINESS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'business' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'industries' ? 'active' : null}><a href="/industries" on:click={() => {active = 'industries'}} class="waves-effect"><i class={`material-icons`}>language</i>Industries</a></li>
        <li class={active === 'fleets' ? 'active' : null}><a href="/fleets" on:click={() => {active = 'fleets'}} class="waves-effect"><i class={`material-icons`}>grid_on</i>Fleets</a></li>
        <li class={active === 'work-orders' ? 'active' : null}><a href="/work-orders" on:click={() => {active = 'work-orders'}} class="waves-effect"><i class={`material-icons`}>format_list_numbered</i>Work Orders</a></li>
        <li class={active === 'transports' ? 'active' : null}><a href="/transports" on:click={() => {active = 'transports'}} class="waves-effect"><i class={`material-icons`}>local_shipping</i>Transports</a></li>
        <li class={active === 'customers' ? 'active' : null}><a href="/customers" on:click={() => {active = 'customers'}} class="waves-effect"><i class={`material-icons`}>security</i>Customers</a></li>
        <li class={active === 'places' ? 'active' : null}><a href="/places" on:click={() => {active = 'places'}} class="waves-effect"><i class={`material-icons`}>public</i>Places</a></li>
        <li class={active === 'things' ? 'active' : null}><a href="/things" on:click={() => {active = 'things'}} class="waves-effect"><i class={`material-icons`}>extension</i>Things</a></li>
        <li class={active === 'history' ? 'active' : null}><a href="/history" on:click={() => {active = 'history'}} class="waves-effect"><i class={`material-icons`}>archive</i>History</a></li>
      </div>
    </li>
    <li class={mode === 'fleets' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('fleets', 2)}><i class={`material-icons`}>grid_on</i>FLEETS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'fleets' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'abilities' ? 'active' : null}><a href="/abilities" on:click={() => {active = 'abilities'}} class="waves-effect"><i class={`material-icons`}>star</i>Abilities</a></li>
        <li class={active === 'vehicles' ? 'active' : null}><a href="/vehicles" on:click={() => {active = 'vehicles'}} class="waves-effect"><i class={`material-icons`}>directions_bus</i>Vehicles</a></li>
        <li class={active === 'equipment' ? 'active' : null}><a href="/equipment" on:click={() => {active = 'equipment'}} class="waves-effect"><i class={`material-icons`}>rv_hookup</i>Equipment</a></li>
        <li class={active === 'professionals' ? 'active' : null}><a href="/professionals" on:click={() => {active = 'professionals'}} class="waves-effect"><i class={`material-icons`}>contacts</i>Professionals</a></li>
        <li class={active === 'tasks' ? 'active' : null}><a href="/tasks" on:click={() => {active = 'tasks'}} class="waves-effect"><i class={`material-icons`}>local_offer</i>Tasks</a></li>
      </div>
    </li>
    <li class={mode === 'work-orders' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('work-orders', 3)}><i class={`material-icons`}>format_list_numbered</i><span style="width: 100%;">WORK ORDERS</span> <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'work-orders' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'estimates' ? 'active' : null}><a href="/estimates" on:click={() => {active = 'estimates'}} class="waves-effect"><i class={`material-icons`}>straighten</i>Estimates</a></li>
        <li class={active === 'jobs' ? 'active' : null}><a href="/jobs" on:click={() => {active = 'jobs'}} class="waves-effect"><i class={`material-icons`}>av_timer</i>Jobs</a></li>
        <li class={active === 'invoices' ? 'active' : null}><a href="/invoices" on:click={() => {active = 'invoices'}} class="waves-effect"><i class={`material-icons`}>attach_money</i>Invoices</a></li>
      </div>
    </li>
    <li class={mode === 'transports' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('transports', 4)}><i class={`material-icons`}>local_shipping</i>TRANSPORTS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'transports' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'pickups' ? 'active' : null}><a href="/pickups" on:click={() => {active = 'pickups'}} class="waves-effect"><i class={`material-icons`}>file_upload</i>Pickups</a></li>
        <li class={active === 'deliveries' ? 'active' : null}><a href="/deliveries" on:click={() => {active = 'deliveries'}} class="waves-effect"><i class={`material-icons`}>file_download</i>Deliveries</a></li>
      </div>
    </li>
    <li class={mode === 'customers' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('customers', 5)}><i class={`material-icons`}>security</i>CUSTOMERS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'customers' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'contacts' ? 'active' : null}><a href="/contacts" on:click={() => {active = 'contacts'}} class="waves-effect"><i class={`material-icons`}>person</i>Contacts</a></li>
        <li class={active === 'locations' ? 'active' : null}><a href="/locations" on:click={() => {active = 'locations'}} class="waves-effect"><i class={`material-icons`}>location_on</i>Locations</a></li>
      </div>
    </li>
    <li class={mode === 'places' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('places', 6)}><i class={`material-icons`}>public</i>PLACES <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'places' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'stores' ? 'active' : null}><a href="/stores" on:click={() => {active = 'stores'}} class="waves-effect"><i class={`material-icons`}>local_convenience_store</i>Stores</a></li>
        <li class={active === 'factories' ? 'active' : null}><a href="/factories" on:click={() => {active = 'factories'}} class="waves-effect"><i class={`material-icons`}>location_city</i>Factories</a></li>
        <li class={active === 'warehouses' ? 'active' : null}><a href="/warehouses" on:click={() => {active = 'warehouses'}} class="waves-effect"><i class={`material-icons`}>home</i>Warehouses</a></li>
      </div>
    </li>
    <li class={mode === 'things' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('things', 7)}><i class={`material-icons`}>extension</i>THINGS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'things' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'tools' ? 'active' : null}><a href="/tools" on:click={() => {active = 'tools'}} class="waves-effect"><i class={`material-icons`}>highlight</i>Tools</a></li>
        <li class={active === 'products' ? 'active' : null}><a href="/products" on:click={() => {active = 'products'}} class="waves-effect"><i class={`material-icons`}>shopping_cart</i>Products</a></li>
      </div>
    </li>
    <li class={mode === 'history' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('history', 8)}><i class={`material-icons`}>archive</i>HISTORY <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'history' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'inspection' ? 'active' : null}><a href="/inspection" on:click={() => {active = 'inspection'}} class="waves-effect"><i class={`material-icons`}>local_see</i>Inspection Logs</a></li>
        <li class={active === 'maintenance' ? 'active' : null}><a href="/maintenance" on:click={() => {active = 'maintenance'}} class="waves-effect"><i class={`material-icons`}>build</i>Maintenance Logs</a></li>
        <li class={active === 'fuel-history' ? 'active' : null}><a href="/fuel-history" on:click={() => {active = 'fuel-history'}} class="waves-effect"><i class={`material-icons`}>local_gas_station</i>Fuel Logs</a></li>
      </div>
    </li>
    <li class={mode === 'settings' ? 'active' : ''}>
      <div class="collapsible-header waves-effect" on:click={() => toggleMode('settings', 9)}><i class={`material-icons`}>settings</i>SETTINGS <i style="width: 100%; text-align: right; margin-right: 0;" class={`material-icons`}>{mode == 'settings' ? 'expand_more' : 'chevron_left'}</i></div>
      <div class="collapsible-body" style="background: #039be5;">
        <li class={active === 'login' ? 'active' : null}><a href="/login" class="waves-effect"><i class={`material-icons`}>exit_to_app</i>Login</a></li>
        <li class={active === 'register' ? 'active' : null}><a href="/register" class="waves-effect"><i class={`material-icons`}>person_add</i>Register</a></li>
        {#if !token}
          <li class={active === 'forgot-password' ? 'active' : null}><a href="/forgot-password" class="waves-effect"><i class={`material-icons`}>lock_open</i>Forgot Password</a></li>
        {/if}
      </div>
    </li>
  </ul>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li>
    <a href="https://github.com/trabur/istrav.pro" target="_blank">
      <div style="font-size: 1em;color: #333; text-align: right; padding: 0 1em;">Beta Version {mode}</div>
    </a>
  </li>
  <br />
  <br />
  <br />
</ul>

<style>
  #slide-out {
    background: #03a9f4;
  }

  .collapsible li {
    background: transparent;
    color: #333;
  }

  .collapsible li.active {
    background: #0288d1;
  }

  .sidenav li > a {
    padding-right: 0;
    color: #333;
  }

  .sidenav li > a > i {
    color: #333;
  }

</style>