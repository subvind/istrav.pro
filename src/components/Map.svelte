<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const leaflet = await import('leaflet');

    const map = leaflet.map('map', {
      scrollWheelZoom: false
    }).setView([30.2672, -97.7431], 13);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    leaflet.marker([30.2672, -97.7431]).addTo(map)
      .bindPopup('Located in Austin, TX')
      .openPopup();
  });
</script>

<div id="map"></div>

<style>
  @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  #map {
    height: calc(100vh);
    width: 100%;
    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

  }
</style>