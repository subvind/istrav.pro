<script lang="ts">
  import { onMount } from "svelte";

  let purposes = ['vehicle routing', 'fleet optimization', 'location tracking', 'work orders', 'transporting', 'inspection & maintenance', 'fuel history', 'parts & inventory', 'customer management' ]
  let purposeIndex = 0

  onMount(() => {
    setInterval(() =>{
      ++purposeIndex
      purposeIndex = purposeIndex % purposes.length
    }, 5000)
  })
</script>

<div class="banner">
  <br />
  <br />
  <div class="container">
    <h4 class="rated light-blue-text">#1 Fleet Management Software</h4>
    <h1 class="taf-part1">The solution for</h1>
    <h1 class="taf-part2">{purposes[purposeIndex]}</h1>
    <p>isTrav Pro is the #1 Fleet Management Software that is FREE up until 25 accounts; all of our source code is licensed as: Fair Source 25 (v0.9). Our API/Library (<a href="https://github.com/trabur/fleet-optimizer" target="_blank">fleet-optimizer</a>) is the best because of it's FMS features plus reactive and offline capabilities. What makes it powerful is TypeScript which allows us to build for web, mobile, desktop, and Internet of Things all under the same roof. We already have a Web Browser App (<a href="https://istrav.pro" target="_blank">istrav.pro</a>) and Mobile App (<a href="https://github.com/trabur/istrav.pro" target="_blank">coming soon!</a>) currently in beta. Continue exploring as an annonymous guest with limited priveledges or consider starting a free account with isTrav Pro today! We have a lot to show you :)</p>
    <a href="/register" class="btn btn-large blue lighten-2">Take a tour</a>
    <a href="/register" class="btn btn-large white black-text">Start free Account</a>
  </div>
  <br />
  <br />
  <br />
  <br />
</div>

<style>
  .banner {
    background-color: #dddddd;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aaaaaa' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
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
    text-decoration: underline #03a9f4;
  }
</style>