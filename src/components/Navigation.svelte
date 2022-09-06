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

    axios.get(`${api}`)
      .then(function (response: any) {
        console.log(response)
        version = response.data
      })

    var elems = document.querySelectorAll('.collapsible');
    var instances = window['M'].Collapsible.init(elems, {});
  })
</script>

<ul id="slide-out" class="sidenav sidenav-fixed" style="width: 300px;">
  
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center" style="min-width: 150px;">isTrav Pro</a>
    </div>
  </nav>
        
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <ul class="collapsible">
    <li>
      <div class="collapsible-header waves-effect">ISTRAV.PRO</div>
      <div class="collapsible-body" style="background: #ffcdd2;">
        <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/production" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>grade</i>Production</a></li>
        <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/solutions" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>check</i>Solutions</a></li>
        <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/apps" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>extension</i>Apps</a></li>
        <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/platforms" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>folder</i>Platforms</a></li>
        <li class={active === 'hosting' ? 'active' : null}><a href="https://istrav.com/projects" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>code</i>Projects</a></li>
      </div>
    </li>
    <li>
      <div class="collapsible-header waves-effect">DESIGN PATTERNS</div>
      <div class="collapsible-body" style="background: #ffcdd2;">
        <li class={active === 'creational' ? 'active' : null}><a href="/design-patterns/creational" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>grade</i>Creational</a></li>
        <li class={active === 'structural' ? 'active' : null}><a href="/design-patterns/structural" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>check</i>Structural</a></li>
        <li class={active === 'behavioral' ? 'active' : null}><a href="/design-patterns/behavioral" on:click={() => {active = 'hosting'}} class="waves-effect"><i class={`material-icons`}>extension</i>Behavioral</a></li>
      </div>
    </li>
    <li>
      <div class="collapsible-header waves-effect">CLIENT AREA</div>
      <div class="collapsible-body" style="background: #ffcdd2;">
        <li class={active === 'login' ? 'active' : null}><a href="https://istrav.com/client-area/verify" class="waves-effect"><i class={`material-icons`}>exit_to_app</i>Login</a></li>
        <li class={active === 'register' ? 'active' : null}><a href="https://istrav.com/client-area/join" class="waves-effect"><i class={`material-icons`}>person_add</i>Register</a></li>
        {#if !token}
          <li class={active === 'forgot-password' ? 'active' : null}><a href="https://istrav.com/client-area/forgot-password" class="waves-effect"><i class={`material-icons`}>lock_open</i>Forgot Password</a></li>
        {/if}
      </div>
    </li>
  </ul>
  <li><div class="divider" style="margin: 0; background-color: #111;"></div></li>
  <li>
    <a href="https://github.com/trabur/istrav-headquarters">
      <div style="font-size: 1em;color: #333; text-align: right; padding: 0 1em;">{version || 'v0.0.0'}</div>
    </a>
  </li>
  <br />
  <br />
  <br />
</ul>

<style>
  #slide-out {
    background: #ef9a9a;
  }

  .collapsible li {
    background: transparent;
    color: #333;
  }

  .collapsible li.active {
    background: #ffcdd2;
  }

  .sidenav li > a {
    padding-right: 0;
    color: #333;
  }

  .sidenav li > a > i {
    color: #333;
  }
</style>