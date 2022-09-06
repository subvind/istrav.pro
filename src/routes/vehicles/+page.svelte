<script lang="ts">
  import Table from "../../components/Table.svelte"
  import * as gridjs from "gridjs";
import { onMount } from "svelte";

  let search = {
    enabled: true
  }
  let sort = true
  let pagination = {
    enabled: true,
    limit: 2,
    summary: true
  }
  let columns = [
    'Name',
    'VIN',
    { 
      name: 'Actions',
      width: '150px',
      sort: false,

      formatter: (cell: any, row: any) => {
        return gridjs.h('button', {
          className: 'btn btn-small blue lighten-2 right',
          onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
        }, 'Edit');
      }
    },
  ]
  let data = [
    ['Tom', 'john@example.com'],
    ['Joe', 'mike@gmail.com'],
    ['Joe1', 'mike1@gmail.com'],
    ['Joe2', 'mike2@gmail.com'],
  ]

  onMount(() => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
      alignment: 'right'
    });
  })
</script>

<div class="banner">
  <br />
  <br />
  <div class="container">
    <h1>Vehicles</h1>
    <nav style="background: transparent; box-shadow: none; height: 32px; line-height: 32px;">
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb">Home</a>
          <a href="#!" class="breadcrumb">Fleet</a>
          <a href="#!" class="breadcrumb">Vehicles</a>
        </div>
      </div>
    </nav>
  </div>
  <br />
  <br />
</div>
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
  <Table columns={columns} data={data} search={search} pagination={pagination} sort={sort} />
</div>

<style>
  .banner {
    background: #ddd;
    min-height: 100px;
    overflow: hidden;
  }
  .banner h1 {
    font-size: 3em;
    margin: 0 0 0.2em;
  }
  .banner .breadcrumb,
  .banner .breadcrumb:before {
    color: #000;
  }
</style>
