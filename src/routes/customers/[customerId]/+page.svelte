<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '$lib/Banner.svelte'

  import { sidebarActive, sidebarMode } from '../../../stores';
  import pro from 'fleet-optimizer'
  import { v4 as uuidv4 } from 'uuid';
  
  export let data: any;
  let customer: any;

  sidebarMode.set('business')
  sidebarActive.set('customers')

  let loading: boolean = true

  onMount(async () => {
    let fleetOptimizer = pro.FleetOptimizer.getInstance()
    let db = await fleetOptimizer.db()
    customer = await db.customer.findOne({
      selector: {
        id: data.customerId
      }
    }).exec()
    console.dir(customer)
    
    loading = false

    setTimeout(() => {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {
        alignment: 'right'
      });
    }, 0)
  })
</script>

{#if loading === false}
  <Banner icon="security" name={customer.name}>
    <a href="/dashboard" class="breadcrumb">Home</a>
    <a href="/customers" class="breadcrumb">Customers</a>
    <a href={`/customers/${data.customerId}`} class="breadcrumb">View</a>
  </Banner>

  <div class="container">
    <!-- Dropdown Trigger -->
    <a class='dropdown-trigger btn-floating btn-large right blue lighten-2' style="position: float; margin-top: -2em;" href='#' data-target='dropdownMore'><i class="material-icons">more_vert</i></a>
  
    <!-- Dropdown Structure -->
    <ul id='dropdownMore' class='dropdown-content' style="min-width: 200px;">
      <li><a href="#!" class="light-blue-text">one</a></li>
      <li><a href="#!" class="light-blue-text">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!" class="light-blue-text">three</a></li>
      <li><a href="#!" class="light-blue-text"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!" class="light-blue-text"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  
    {JSON.stringify(customer)}
  </div>
{/if}
