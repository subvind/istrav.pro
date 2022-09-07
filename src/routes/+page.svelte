<script lang="ts">
  import { onMount } from 'svelte';

  import { backend, sidebarActive, sidebarMode } from '../stores';
  import pro from 'fleet-optimizer'
  import { v4 as uuidv4 } from 'uuid';

  let api
  backend.subscribe(value => {
		api = value
	})
  sidebarMode.set('application')
  sidebarActive.set('intro')

  let purposes = ['vehicle routing', 'fleet optimization', 'location tracking', 'work orders', 'transporting', 'inspection & maintenance', 'fuel history', 'parts & inventory', 'customer management' ]
  let purposeIndex = 0

  onMount(async () => {
    let fleetOptimizer = pro.FleetOptimizer.getInstance()
  
    function create(db: any) {
      // create fleet
      db.fleet.insert({    
        id: uuidv4(),
        name: 'Expert Services'
      })
  
      // create vehicles
      let v1 = db.vehicle.insert({
        id: uuidv4(),
        licensePlate: 'SDF123'
      })
      
      // create customers
      let c1 = db.customer.insert({
        id: uuidv4(),
        name: 'smith family'
      })
      let c2 = db.customer.insert({
        id: uuidv4(),
        name: 'j company'
      })
      
      // create customer locations and contacts
      db.contact.insert({
        id: uuidv4(),
        first: 'james',
        last: 'smith',
        customerId: c1.id
      })
      
      db.location.insert({
        id: uuidv4(),
        name: 'Austin, TX',
        latitude: 30.266666,
        longitude: -97.733330,
        customerId: c1.id
      })
      
      // create orders
      fleetOptimizer.workOrder(1).insert({
        customerId: c1.id
      })
      fleetOptimizer.workOrder(2).insert({
        customerId: c1.id
      })
      fleetOptimizer.workOrder(3).insert({
        customerId: c1.id
      })
    }
  
    async function destroy(db: any) {
      // destroy fleet
      await db.fleet.find({
        selector: {
          name: 'Expert Services'
        }
      }).remove()
  
      // destroy vehicles
      await db.vehicle.find({
        selector: {
          licensePlate: 'SDF123'
        }
      }).remove()
  
      // destroy customers
      await db.customer.find({
        selector: {
          name: 'smith family'
        }
      }).remove()
      await db.customer.find({
        selector: {
          name: 'j company'
        }
      }).remove()
  
      // destroy customer locations and contacts
      await db.contact.find({
        selector: {
          first: 'james',
          last: 'smith'
        }
      }).remove()
      await db.location.find({
        selector: {
          name: 'Austin, TX'
        }
      }).remove()
  
      // destory orders
      await fleetOptimizer.workOrder(1).remove()
      await fleetOptimizer.workOrder(2).remove()
      await fleetOptimizer.workOrder(3).remove()
    }
  
    async function test () {
      // required storage system
      let db = await fleetOptimizer.database(pro.database.browser)
  
      // setup
      create(db)
  
      // perform
      let professionals = await fleetOptimizer.professionals()
  
      let fleets = await fleetOptimizer.fleets()
      let fleet1 = fleets[0]
      
      let vehicles = await fleetOptimizer.vehicles()
      let vehicle1 = vehicles[0]
      
      let locations = await fleetOptimizer.locations()
      let location1 = locations[0]
  
      fleetOptimizer.calculate(fleet1).turnByTurnDirections(vehicle1, location1)
      fleetOptimizer.calculate(fleet1).TSP()
  
      console.log('fleet1', fleet1.name)
      console.log('vehicle1', vehicle1.licensePlate)
      console.log('location1', location1.name)
  
      // teardown
      destroy(db)
    }
    test()

    setInterval(() =>{
      ++purposeIndex
      purposeIndex = purposeIndex % purposes.length
    }, 5000)
  })

</script>

<br />
<br />
<div class="container">
  <h4 class="rated light-green-text">#1 Fleet Management Software</h4>
  <h1 class="taf-part1">The application for</h1>
  <h1 class="taf-part2">{purposes[purposeIndex]}</h1>
  <p>isTrav Pro is the #1 Fleet Management Software that is FREE up until 25 accounts; all of our source code is licensed as: Fair Source 25 (v0.9). Our API/Library (<a href="https://github.com/trabur/fleet-optimizer" target="_blank">fleet-optimizer</a>) is the best because of it's FMS features plus reactive and offline capabilities. What makes it powerful is TypeScript which allows us to build for web, mobile, desktop, and Internet of Things all under the same roof. We already have a Web Browser App (<a href="https://istrav.pro" target="_blank">istrav.pro</a>) and Mobile App (<a href="https://github.com/trabur/istrav.pro" target="_blank">coming soon!</a>) currently in beta. Continue exploring as an annonymous guest with limited priveledges or consider starting a free account with isTrav Pro today! We have a lot to show you :)</p>
  <a href="/register" class="btn btn-large green lighten-2">Take a tour</a>
  <a href="/register" class="btn btn-large white black-text">Start free Account</a>
</div>

<style>
  .rated {
    font-size: 1.5em;
  }

  .taf-part1 {
    font-size: 3.5em;
    font-weight: 900;
    margin: 0;
  }
  .taf-part2 {
    font-size: 3.5em;
    font-weight: 900;
    margin: 0;
    text-decoration: underline #8bc34a;
  }
</style>