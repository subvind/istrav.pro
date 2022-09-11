<script>

  import { onMount } from 'svelte';

  onMount(async () => {
    const map = L.map('map', {
      scrollWheelZoom: false
    }).setView([30.2672, -97.7431], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: `<a href="https://istrav.com">istrav.pro</a> © ${new Date().getFullYear()}.`
    }).addTo(map);

    L.Routing.control({
      router: L.Routing.mapbox('pk.eyJ1IjoiaXN0cmF2IiwiYSI6ImNsN3dodG5oaDBmdWQzeG4zamVwNGMzMnEifQ.aWTWTyyy_vpdMkYrRNEfgQ'),
      waypoints: [
        L.latLng(30.2672, -97.7431),
        L.latLng(30.2672, -97.8431),
        L.latLng(30.1672, -97.8431),
        L.latLng(30.1672, -97.7431),
      ],
      lineOptions: {
        styles: [{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 10}, {color: 'red', opacity: 1, weight: 8}],
        addWaypoints: false,
      },
      show: false
    }).addTo(map)

    L.marker([30.2672, -97.7431]).addTo(map)
      .bindPopup('Located in Austin, TX')
      .openPopup();
  });
</script>

<div id="map"></div>

<style>
  @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  #map {
    height: calc(90vh);
    width: 100%;
    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }

  :global(.leaflet-control-container .leaflet-routing-container-hide) {
    display: none;
  }
</style>