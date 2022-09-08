<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '../../../components/Banner.svelte'

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
  })
</script>

{#if loading === false}
  <Banner icon="security" name={customer.name}>
    <a href="/dashboard" class="breadcrumb">Home</a>
    <a href="/customers" class="breadcrumb">Customers</a>
    <a href={`/customers/${data.customerId}`} class="breadcrumb">View</a>
  </Banner>

  {JSON.stringify(customer)}
{/if}
