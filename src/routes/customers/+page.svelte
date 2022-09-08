<script lang="ts">
  import { onMount } from "svelte";

  import Banner from '../../components/Banner.svelte'
  import Table from "../../components/Table.svelte"
  import * as gridjs from "gridjs";

  import { sidebarActive, sidebarMode } from '../../stores';
  import pro from 'fleet-optimizer'
  import { v4 as uuidv4 } from 'uuid';
  
  sidebarMode.set('business')
  sidebarActive.set('customers')

  let search = {
    enabled: true
  }
  let sort = true
  let pagination = {
    enabled: true,
    limit: 10,
    summary: true
  }
  let columns = [
    {
      name: 'Id',
      width: '100px',
      sort: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('div', {
          style: 'width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;',
        }, row.cells[0].data);
      }
    },
    'name',
    { 
      name: 'Actions',
      sort: false,
      hidden: false,
      formatter: (cell: any, row: any) => {
        return gridjs.h('a', {
          href: `/customers/${row.cells[0].data}`,
          className: 'btn btn-small blue lighten-2 right',
        }, 'Edit');
      }
    },
  ]
  let data: any = [
    // ['Tom', 'john@example.com'],
    // ['Joe', 'mike@gmail.com'],
    // ['Joe1', 'mike1@gmail.com'],
    // ['Joe2', 'mike2@gmail.com'],
  ]

  let loading: boolean = true
  onMount(async () => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      alignment: 'right'
    });

    let fleetOptimizer = pro.FleetOptimizer.getInstance()
    let db = await fleetOptimizer.db()
    let customers = await db.customer.find().exec()
    console.dir(customers)

    customers.forEach((value: any) => {
      data.push([value.id, value.name])
    })
    
    loading = false
  })
</script>

<Banner icon="security" name="Customers">
  <a href="/dashboard" class="breadcrumb">Home</a>
  <a href="/customers" class="breadcrumb">Customers</a>
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
  {#if loading === false}
    <Table columns={columns} data={data} search={search} pagination={pagination} sort={sort} />
  {/if}
</div>
<br />
<br />
<br />
<br />