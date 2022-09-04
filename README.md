istrav.pro
========
fleet management software

apps:
- osrm: https://osrm.istrav.dev
- database: https://couchdb.istrav.dev
- socket: https://pro.istrav.dev
- browser: https://istrav.pro
- mobile: coming soon!

shared tech:
- library: https://github.com/trabur/fleet-optimizer

backend tech:
- OSRM server for calculating Matrix Distances
- socket.io server for live GPS tracking
- CouchDB server for rxdb.info/replication-couchdb.html

browser tech:
- kit.svelte.dev
- materializecss.com
- RxDB
- mapbox.com
- socket.io

mobile tech:
- svelte-native.technology

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
